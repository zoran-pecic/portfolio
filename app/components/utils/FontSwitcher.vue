<template>
    <div class="font-switcher">
        <button class="switcher-toggle" :aria-expanded="open" aria-controls="font-switcher-panel" @click="open = !open">
            Aa Fonts
        </button>

        <div v-if="open" id="font-switcher-panel" class="switcher-panel">
            <div class="presets">
                <button
                    v-for="preset in PRESETS"
                    :key="preset.name"
                    class="preset"
                    :class="{ 'is-active': isPreset(preset) }"
                    @click="applyPreset(preset)"
                >
                    {{ preset.name }}
                </button>
            </div>

            <label v-for="role in ROLES" :key="role.key" class="role">
                <span>{{ role.label }}</span>
                <select v-model="picked[role.key]">
                    <option v-for="font in role.options" :key="font" :value="font">{{ font }}</option>
                </select>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * FontSwitcher: temporary panel comparing the current fonts with the JetBrains Mono + IBM Plex Sans
 * pairing suggested by ui-ux-pro-max. Remove once a pairing is chosen.
 */
import { reactive, ref, watch } from 'vue';

type Role = 'display' | 'sans' | 'mono';

const ROLES: { key: Role; label: string; options: string[]; fallback: string }[] = [
    { key: 'display', label: 'Headings', options: ['Unica One', 'JetBrains Mono'], fallback: 'var(--font-sans)' },
    { key: 'sans', label: 'Body', options: ['Geist', 'IBM Plex Sans'], fallback: 'system-ui, sans-serif' },
    { key: 'mono', label: 'Mono accents', options: ['Courier Prime', 'JetBrains Mono'], fallback: 'ui-monospace, monospace' },
];

const PRESETS: { name: string; fonts: Record<Role, string> }[] = [
    { name: 'Current', fonts: { display: 'Unica One', sans: 'Geist', mono: 'Courier Prime' } },
    { name: 'Proposed', fonts: { display: 'JetBrains Mono', sans: 'IBM Plex Sans', mono: 'JetBrains Mono' } },
];

// Current fonts are already in the head stylesheet; the alternatives load from Google Fonts on first pick.
const GOOGLE_FONTS: Record<string, string> = {
    'JetBrains Mono': 'JetBrains+Mono:wght@400;500;600',
    'IBM Plex Sans': 'IBM+Plex+Sans:wght@400;500;600',
};

const open = ref(false);
const picked = reactive<Record<Role, string>>({ ...PRESETS[0]!.fonts });

function isPreset(preset: (typeof PRESETS)[number]) {
    return ROLES.every((role) => picked[role.key] === preset.fonts[role.key]);
}

function applyPreset(preset: (typeof PRESETS)[number]) {
    Object.assign(picked, preset.fonts);
}

/** Adds the Google Fonts stylesheet for a family once. */
function loadFont(family: string) {
    const spec = GOOGLE_FONTS[family];
    if (!spec || document.querySelector(`link[data-font="${family}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
    link.dataset.font = family;
    document.head.appendChild(link);
}

watch(picked, () => {
    ROLES.forEach((role) => {
        loadFont(picked[role.key]);
        document.documentElement.style.setProperty(`--font-${role.key}`, `'${picked[role.key]}', ${role.fallback}`);
    });
});
</script>

<style scoped>
.font-switcher {
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 950;
    font-family: system-ui, sans-serif;
    font-size: 0.85rem;
}

.switcher-toggle {
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid var(--light-gray-border);
    background-color: var(--primary-dark-gray);
    color: var(--white-gray);
    cursor: pointer;
}

.switcher-panel {
    position: absolute;
    left: 0;
    bottom: 56px;
    width: 260px;
    display: grid;
    gap: 12px;
    padding: 16px;
    border-radius: 10px;
    border: 1px solid var(--rule-light);
    background-color: var(--white-gray);
    color: var(--description-dark-title);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.presets {
    display: flex;
    gap: 8px;
}

.preset {
    flex: 1;
    min-height: 36px;
    border-radius: 6px;
    border: 1px solid var(--rule-light);
    background: none;
    cursor: pointer;
}

.preset.is-active {
    border-color: var(--description-dark-title);
    background-color: var(--paper);
}

.role {
    display: grid;
    gap: 4px;
    color: var(--description-light-gray-color);
}

.role select {
    min-height: 36px;
    padding: 0 8px;
    border-radius: 6px;
    border: 1px solid var(--rule-light);
    font: inherit;
    color: var(--description-dark-title);
}
</style>
