# TSC Label Designer

A Django-based label design software for TSC thermal printers. Design stickers and labels with a visual editor, save them as BTW files, and generate PRN files (TSPL commands) for TSC printers.

## Features

- **Visual Label Designer** - Drag-and-drop canvas editor powered by Fabric.js
- **Text Elements** - Add text with configurable font, size, weight, color
- **Barcodes** - Code 128, Code 39, EAN-13, EAN-8 with live preview
- **QR Codes** - Generate QR codes with custom data
- **Shapes** - Rectangles, lines, filled rectangles
- **Images** - Upload and place images on labels
- **Size Presets** - Quick presets for common label sizes (50x30mm, 100x50mm, etc.)
- **BTW File Format** - Save/load designs in a JSON-based BTW format (reopenable in the designer)
- **PRN File Generation** - Auto-generate TSPL printer command files for TSC printers
- **Design Management** - Create, edit, duplicate, delete, import/export designs
- **Auto-save** - Designs auto-save every 60 seconds
- **Keyboard Shortcuts** - Delete, Ctrl+D (duplicate), Ctrl+S (save)

## Setup

```bash
cd tsc_printer
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open http://localhost:8000 in your browser.

## Usage

1. Click **New Design** to create a label
2. Configure label size (width/height in mm), DPI, and printer settings
3. Use the toolbar to add text, barcodes, QR codes, shapes, or images
4. Edit element properties in the right panel
5. Click **Save** to save the design (generates BTW + PRN files automatically)
6. Download the BTW file to reopen later, or the PRN file to send to a TSC printer

## File Formats

### BTW (BarTender-style)
JSON-based format storing all design metadata, dimensions, and canvas object data. Can be imported back into the designer.

### PRN (TSPL Commands)
Contains TSPL/TSPL2 printer commands that TSC printers understand. Generated automatically when saving a design. Can be sent directly to a TSC printer via USB, network, or serial port.

## Printer Settings

- **DPI**: 203 (default), 300, or 600
- **Speed**: 1-10 (inches per second)
- **Darkness**: 0-15 (print density)
- **Gap**: Distance between labels in mm
- **Columns**: Number of label columns
