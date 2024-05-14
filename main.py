# pip install pytube
# Name: pytube
# Version: 15.0.0
from pytube import YouTube
from pytube import Playlist


SAVE_PATH = "C:\\Users\\Republic Of Computer\\Videos\\data_structure" #to_do


#link of the video to be downloaded
links= input("enter the linek of the play list ")
# "https://youtube.com/playlist?list=PLblh5JKOoLUL3IJ4-yor0HzkqDQ3JmJkc"
playlist = Playlist(links)

PlayListLinks = playlist.video_urls
N = len(PlayListLinks)
#print('Number of videos in playlist: %s' % len(PlayListLinks))

print(f"This link found to be a Playlist Link with number of videos equal to {N} ")
print(f"\n Lets Download all {N} videos")

for i,link in enumerate(PlayListLinks):

    yt = YouTube(link)
    d_video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
    d_video.download(SAVE_PATH)
    print(i+1, ' Video is Downloaded.')