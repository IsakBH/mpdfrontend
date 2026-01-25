> [!WARNING]
> This project is mostly made for fun, and it will probably never be very good or secure


## Player shortcuts
| Keyboard shortcut | Action/Description |
|---|---|
| <kbd>Space</kbd> | Pauses the currently playing song. |
| <kbd>&leftarrow;</kbd> | Skips/seeks 5 sekonds backwards in the currently playing song. |
| <kbd>&rightarrow;</kbd> | Skips/seeks 5 seconds forwards in the currently playing song. |
| <kbd>&downarrow;</kbd> | Decreases the volume by 5%. |
| <kbd>&uparrow;</kbd> | Increase the volume by 5%. |
| <kbd>k</kbd> | Plays the previous song in the queue. |
| <kbd>j</kbd> | Plays the next song in the queue. |

## YT-DLP command to download music in the highest quality while extracting all metadata
```bash
yt-dlp 'link to cool music on youtube' \
-f "bestaudio[ext=m4a]" \
--embed-thumbnail \
--convert-thumbnail jpg \
--embed-metadata \
--exec-before-download "ffmpeg -i %(thumbnails.-1.filepath)q -vf crop='ih:ih' _%(thumbnails.-1.filepath)q && mv _%(thumbnails.-1.filepath)q %(thumbnails.-1.filepath)q" \
--output "%(artist)s - %(title)s.%(ext)s"
```

## How to get synced lyrics from your songs
This command uses a python program called [syncedlyrics](https://pypi.org/project/syncedlyrics/).
```bash
for file in *.m4a; do syncedlyrics "${file%.m4a}" -o "${file%.m4a}.lrc"; done
```

>Alternatively, you can find the song you want on [LRCLIB](https://lrclib.net) and download the lyrics from there, but that isn't as cool as doing it with a command 😉
