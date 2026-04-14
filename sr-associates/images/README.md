# SR Associates - Image Guide

## Folder Structure

```
images/
├── hero/          → Hero section background / main banner image
│                    Recommended: 1920x1080px, JPG
│                    Filename: hero-bg.jpg
│
├── team/          → Team member photos
│                    Recommended: 400x480px, JPG (portrait)
│                    Filenames: abdul-rahman.jpg, team-2.jpg, etc.
│
├── services/      → Service illustration images (optional)
│                    Recommended: 600x400px, JPG/PNG
│                    Filenames: gst.jpg, tax.jpg, audit.jpg, etc.
│
└── gallery/       → Office / work photos (6 images)
                     Recommended: 800x600px, JPG
                     Filenames: gallery-1.jpg to gallery-6.jpg
```

## How to Add Images

1. Place your image in the correct folder
2. In `index.html`, find the `<!-- IMAGE: ... -->` comment near each placeholder
3. Replace the `<div class="img-placeholder-box">` with:
   ```html
   <img src="images/folder/filename.jpg" alt="Description">
   ```

## Gallery Images (6 slots)
- gallery-1.jpg → Office exterior or reception (large featured image)
- gallery-2.jpg → Team at work
- gallery-3.jpg → Office interior
- gallery-4.jpg → Client meeting
- gallery-5.jpg → Documents / compliance work
- gallery-6.jpg → Any professional photo
