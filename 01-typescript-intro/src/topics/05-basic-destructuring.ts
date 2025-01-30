interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 180,
    song: 'bohemian Rhapsody',
    details: {
        author: 'Queen',
        year: 1987
    }
};

const song = 'New Song Test ';

const {...value} = audioPlayer;
const { song: anotherSong, songDuration: duration, details: details } = audioPlayer;
const { author } = details;

// console.log('Audio PLayer ', value);
// console.log('Song ', anotherSong);
// console.log('Song Duration ', duration);
// console.log('Author ', author);

const [ , , Trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Character 3: ', Trunks);


export {};
