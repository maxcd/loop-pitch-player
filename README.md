# 🎵 Loop Pitch Player

A lightweight web app for looping drum loops and changing tempo without affecting pitch. No installation required — runs directly in your browser.

**→ [Open Loop Pitch Player](https://maxcd.github.io/loop-pitch-player/)**

---

## What it does

- Load a folder of audio files (MP3, WAV, OGG, FLAC, AAC, M4A)
- Browse and select loops from your folder structure
- Change tempo from −33% to +33% without changing pitch
- BPM display — auto-detected from filename or audio analysis
- Fine-tune tempo with +/− 1 BPM buttons
- Waveform display with playback progress
- Works offline after first visit

---

## Installation

### Android (recommended)

1. Open **Chrome** on your Android device
2. Go to **[https://maxcd.github.io/loop-pitch-player/](https://maxcd.github.io/loop-pitch-player/)**
3. Tap the **three dots menu (⋮)** in the top right
4. Tap **"Add to Home Screen"** or **"Install App"**
5. Confirm — the app icon will appear on your home screen

> ✅ Chrome on Android supports full folder selection and remembers your last folder between sessions.

---

### iPhone / iPad (iOS)

1. Open **Safari** on your iPhone or iPad
2. Go to **[https://maxcd.github.io/loop-pitch-player/](https://maxcd.github.io/loop-pitch-player/)**
3. Tap the **Share button** (the box with an arrow pointing up)
4. Scroll down and tap **"Add to Home Screen"**
5. Tap **"Add"** — the app icon will appear on your home screen

> ⚠️ On iOS, you can select multiple audio files at once but not an entire folder. Select all your loops in one go when prompted.

> ⚠️ Use **Safari** on iOS — Chrome on iPhone uses the same engine as Safari but may behave differently. Safari is the most reliable option.

---

### Windows / Mac (desktop)

1. Open **Google Chrome** (recommended) or Microsoft Edge
2. Go to **[https://maxcd.github.io/loop-pitch-player/](https://maxcd.github.io/loop-pitch-player/)**
3. Optionally: click the **install icon** in the address bar to install as a desktop app

> ❌ Firefox is not supported — it does not implement the folder picker API.

---

## How to use

### Loading loops

**Android / Windows / Mac:**
- Tap **"Ordner wählen"** and select the folder containing your loops
- Subfolders are supported — navigate using the breadcrumb bar at the top of the file list
- The app remembers your folder — next time it loads automatically

**iPhone / iPad:**
- Tap **"Laden"** and select your audio files (you can select multiple at once)
- Files need to be re-selected each time the app is opened on iOS

### Playing loops

- Tap a loop name in the list to load it
- Tap **▶ Play** to start — the button changes to **■ Stop**
- The waveform shows playback progress in real time
- Every loop starts from the beginning when you press Play

### Changing tempo

- Use the **Tempo slider** to change speed from −33% to +33%
- Use the **− / + buttons** for precise ±1 BPM steps (hold for continuous change)
- Use **Reset BPM** to return to original tempo
- The pitch stays constant regardless of tempo (pitch-correction active)

### BPM detection

- BPM is automatically read from the filename if present (e.g. `groove_120bpm.wav`)
- If not found in the filename, audio analysis is used automatically
- Tap the **BPM Original** display to re-analyze with a different method:
  - 🥁 Onset detection — best for busy grooves
  - 〰 Autocorrelation — best for simple loops
  - ⚡ Combined — automatic (default)

---

## Tips

- **Name your files with BPM** for best accuracy — e.g. `funk_groove_98bpm.wav`. This is more reliable than audio analysis.
- **Store loops in internal storage** — avoid SD cards or cloud-synced folders, as these can cause file access errors.
- **Subfolders work great** — organize by genre, feel, or BPM range and navigate with the breadcrumb bar.
- The app works **fully offline** after the first visit — no internet connection needed.

---

## Supported file formats

MP3 · WAV · OGG · FLAC · AAC · M4A · OPUS · WEBM

---

## Browser compatibility

| Browser | Android | iOS | Windows/Mac |
|---|---|---|---|
| Chrome | ✅ Full support | ⚠️ Files only (no folder) | ✅ Full support |
| Safari | — | ✅ Files only (no folder) | ⚠️ Limited |
| Edge | ✅ Full support | ⚠️ Files only | ✅ Full support |
| Firefox | ❌ Not supported | ❌ Not supported | ❌ Not supported |

---

## Known limitations

- **iOS**: Folder selection is not supported by Apple — individual files must be selected manually each time
- **Firefox**: The folder picker API is not implemented — use Chrome or Edge instead
- **SD cards / cloud folders**: May cause file access errors on some Android devices — use internal storage

---

*Loop Pitch Player is a free, open source web app. No data is collected, no account required.*
