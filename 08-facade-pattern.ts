/**
 * The Facade Pattern provides a unified interface
 * to a set of interfac in a subsystem. Facade defines
 * a higher-level interface that makes the subsystem
 * easier to use.
 */

class HomeTheaterFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: ShowScreen;
  popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: ShowScreen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  watchMovie(movie: string): void {
    console.log('Get Ready To Watch A Movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim();
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume();
    this.player.on();
    this.player.play(movie);
  }

  endMovie(): void {
    console.log('Shutting Movie Theater Down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }
}

// Vendor provided APIs
class ShowScreen {
  up(): void {
    console.log('Show Screen: Up');
  }

  down(): void {
    console.log('Show Screen: Down');
  }
}

class PopcornPopper {
  on(): void {
    console.log('Popcorn Popper: On');
  }

  off(): void {
    console.log('Popcorn Popper: Off');
  }

  pop(): void {
    console.log('Popcorn Popper: Pop');
  }
}

class TheaterLights {
  on(): void {
    console.log('Theater Light: On');
  }

  off(): void {
    console.log('Theater Light: Off');
  }

  dim(): void {
    console.log('Theater Light: Dim');
  }
}

class Amplifier {
  tuner: Tuner;
  streamingPlayer: StreamingPlayer;

  on(): void {
    console.log('Amplifier: On');
  }

  off(): void {
    console.log('Amplifier: Off');
  }

  setStreamingPlayer(streamingPlayer: StreamingPlayer) {
    this.streamingPlayer = streamingPlayer;
    console.log('Amplifier: Set Streaming Player');
  }

  setStereoSound(): void {
    console.log('Amplifier: Set Stereo Sound');
  }

  setSurroundSound(): void {
    console.log('Amplifier: Set Surround Sound');
  }

  setTuner(tuner: Tuner) {
    this.tuner = tuner;
    console.log('Amplifier: Set Tuner');
  }

  setVolume() {
    console.log('Amplifier: Set Volume');
  }
}

class StreamingPlayer {
  on(): void {
    console.log('Streaming Player: On');
  }

  off(): void {
    console.log('Streaming Player: Off');
  }

  setSurroundAudio(): void {
    console.log('Streaming Player: Set Surround Audio');
  }

  setTwoChannelAudio(): void {
    console.log('Streaming Player: Set Two Channel Audio');
  }

  play(movie: string): void {
    console.log('Streaming Player: Play');
  }

  pause(): void {
    console.log('Streaming Player: Pause');
  }

  stop(): void {
    console.log('Streaming Player: Stop');
  }
}

class Tuner {
  on(): void {
    console.log('Tuner: On');
  }

  off(): void {
    console.log('Tuner: Off');
  }

  setAm(): void {
    console.log('Tuner: Set Am');
  }

  setFm(): void {
    console.log('Tuner: Set Fm');
  }

  setFrequency(): void {
    console.log('Tuner: Set Frequency');
  }
}

class Projector {
  on(): void {
    console.log('Projector: On');
  }

  off(): void {
    console.log('Projector: Off');
  }

  tvModel(): void {
    console.log('Projector: tvModel');
  }

  wideScreenMode(): void {
    console.log('Projector: Wide Screen Mode');
  }
}
