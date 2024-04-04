import time

def first():
    print('Start...')
    time.sleep(3)
    print('First')
    print('End...')


def second():
    print('Second')


# first()
# second()


def download_song(song_name, artist):
    print(f'Downloading {song_name} by {artist}...')
    time.sleep(5)
    return {'song': song_name, 'artist': artist, 'time': '3:07'}

# def play_song(song_name, artist):
#     print(f'First we need to download {song_name}')
#     song = download_song(song_name, artist)
#     print(f'Successfully downloaded {song_name}')
#     print(f"{song['song']} by {song['artist']} is playing for the next {song['time']}")


# play_song('Bad Blood', 'Taylor Swift')

def play_taylor(song_name):
    song = download_song(song_name)
    print('{song.title} by {song.artist} is now playing...')
    artist = song['artist']
    print("Oh my gosh", artist, "I love you!")
    print('Thank you for searching our database')
