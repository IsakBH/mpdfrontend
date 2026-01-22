> [!WARNING]
> This project is mostly made for fun, and it will probably never be very good or secure

## YT-DLP command to download music in the highest quality while extracting all metadata
```bash
yt-dlp 'link to cool music on youtube' -f "bestaudio[ext=m4a]" --embed-thumbnail --convert-thumbnail jpg --exec-before-download "ffmpeg -i %(thumbnails.-1.filepath)q -vf crop=\'if(gt(ih,iw),iw,ih):\'if(gt(iw,ih),ih,iw)\' _%(thumbnails.-1.filepath)q" --exec-before-download "rm %(thumbnails.-1.filepath)q" --exec-before-download "mv _%(thumbnails.-1.filepath)q %(thumbnails.-1.filepath)q" --output "%(artist)s - %(title)s.%(ext)s --embed-metadata"
```
