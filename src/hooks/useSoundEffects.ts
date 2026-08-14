import { useState, useEffect, useRef } from 'react';

export function useSoundEffects() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
  };

  const playClick = () => {
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtxRef.current.currentTime + 0.08);

      gain.gain.setValueAtTime(0.06, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.08);
    } catch {
      // Audio not supported or blocked
    }
  };

  const playIceClink = () => {
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const freqs = [2200, 3100, 4400];
      freqs.forEach((freq, index) => {
        if (!audioCtxRef.current) return;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime + index * 0.03);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.8, audioCtxRef.current.currentTime + index * 0.03 + 0.12);

        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime + index * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + index * 0.03 + 0.12);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start(audioCtxRef.current.currentTime + index * 0.03);
        osc.stop(audioCtxRef.current.currentTime + index * 0.03 + 0.12);
      });
    } catch {
      // Ignore
    }
  };

  const toggleAmbientSound = () => {
    initAudio();
    if (!audioCtxRef.current) return;

    if (isPlaying) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
      }
      setTimeout(() => {
        oscillatorRef.current?.stop();
        noiseNodeRef.current?.stop();
        setIsPlaying(false);
      }, 800);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Warm Brown Noise Generator for Cafe Ambiance
      const bufferSize = audioCtxRef.current.sampleRate * 3;
      const buffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const noise = audioCtxRef.current.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Filter for warm, deep low-frequency coffeehouse rumble
      const filter = audioCtxRef.current.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, audioCtxRef.current.currentTime);

      const gain = audioCtxRef.current.createGain();
      gain.gain.setValueAtTime(0.001, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, audioCtxRef.current.currentTime + 1.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      noise.start();
      noiseNodeRef.current = noise;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return {
    isPlaying,
    toggleAmbientSound,
    playClick,
    playIceClink,
  };
}
