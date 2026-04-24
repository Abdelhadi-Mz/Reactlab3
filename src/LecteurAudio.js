import son from './audio.mp3';

/**
 * LecteurAudio component
 * 
 * Renders an audio player that plays the imported audio file.
 */
function LecteurAudio() {
  return <audio controls src={son}></audio>;
}

export default LecteurAudio;