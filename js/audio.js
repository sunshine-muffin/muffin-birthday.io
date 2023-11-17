new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        isPlaying: false,
        tracks: [
          {
            name: "Anirudh Ravichander and Priya Mali",
            artist: "Hayyoda",
            cover: "assets/music_cover/jawan.jpg",
            source: "assets/mp3/Hayyoda.mp3",
            url:"https://youtu.be/tbIfn-8TIS4?feature=shared",
            favorited: false
          },
          {
            name: "A.R.Rahman",
            artist: "Hossana",
            cover: "assets/music_cover/vtv.jpg",
            source: "assets/mp3/Hosanna.mp3",
            url: "https://youtu.be/YFYiTS46x-8?feature=shared",
            favorited: false
          },
          {
            name: "A.R.Rahman",
            artist: "Kannukul Kannai",
            cover: "assets/music_cover/vtv.jpg",
            source: "assets/mp3/Kannukkul-Kannai.mp3",
            url: "https://youtu.be/TD1mHl9mUN4?feature=shared",
            favorited: false
          },
          {
            name: "A.R.Rahman, Shreya Ghoshal",
            artist: "Mannipaaya - Lofi Flip",
            cover: "assets/music_cover/mp-lofi.jpg",
            source: "assets/mp3/vtv-lofi.mp3",
            url: "https://youtu.be/ed6VxAKX0Dg?feature=shared",
            favorited: false
          },
          {
            name: "Harris Jeyaraj",
            artist: "Mundhinam",
            cover: "assets/music_cover/varanam_1000.jpg",
            source: "assets/mp3/Mundhinam-Parthene.mp3",
            url: "https://youtu.be/93iK4wNij8E?feature=shared",
            favorited: true
          },
          {
            name: "Harris Jeyaraj",
            artist: "Adiye Kolluthe",
            cover: "assets/music_cover/varanam_1000.jpg",
            source: "assets/mp3/adiye-kolluthey.mp3",
            url: "https://youtu.be/oNTOpHEpGiA?feature=shared",
            favorited: false
          },
          {
            name: "Harris Jeyaraj",
            artist: "Mazhai Vara Pogudhe",
            cover: "assets/music_cover/yennai_arindhaal.jpg",
            source: "assets/mp3/Mazhai-Vara-Pogudhe.mp3",
            url: "https://youtu.be/Nz1iHi0fhzI?feature=shared",
            favorited: true
          },
          {
            name: "A.R.Rahman, Sujatha",
            artist: "Nenjam Ellam",
            cover: "assets/music_cover/aytha_eluthu.jpg",
            source: "assets/mp3/Nenjam-Ellam-Kadhal.mp3",
            url: "https://youtu.be/2hBZTzopw7w?feature=shared",
            favorited: false
          },
          {
            name: "Yuvan Shankar Raja",
            artist: "Thuli Thuli",
            cover: "assets/music_cover/paiyaa.jpg",
            source: "assets/mp3/Thuli-Thuli-Mazhaiyaai.mp3",
            url: "https://youtu.be/v-hL3sks2qI?feature=shared",
            favorited: false
          },
          {
            name: "Yuvan Shankar Raja",
            artist: "En Kaadhal Solla",
            cover: "assets/music_cover/paiyaa.jpg",
            source: "assets/mp3/En-Kadhal-Solla.mp3",
            url: "https://youtu.be/thtAxtEuX6c?feature=shared",
            favorited: false
          },
          {
            name: "SaNa, Pradeep Kumar",
            artist: "Aval",
            cover: "assets/music_cover/manithan.jfif",
            source: "assets/mp3/Aval.mp3",
            url: "https://youtu.be/My_S68DAAPg?feature=shared",
            favorited: false
          },
          {
            name: "Harris Jeyaraj, Karthik",
            artist: "Oru Manam",
            cover: "assets/music_cover/dn.jfif",
            source: "assets/mp3/Oru-Manam.mp3",
            url: "https://youtu.be/7fUljO-O_-A?feature=shared",
            favorited: false
          },
          {
            name: "SaNa, Sid Sriram",
            artist: "Ennadi Maayavi Nee",
            cover: "assets/music_cover/vd_ch.jfif",
            source: "assets/mp3/Ennadi-Maayavi-Nee.mp3",
            url: "https://youtu.be/s20GxxYUhfA?feature=shared",
            favorited: false
          },
          {
            name: "Harris Jeyaraj, Chinmayi",
            artist: "Vaarayo",
            cover: "assets/music_cover/vv-lofi.jpg",
            source: "assets/mp3/VV.mp3",
            url: "https://youtu.be/s20GxxYUhfA?feature=shared",
            favorited: false
          },
          {
            name: "Thaman S",
            artist: "Jimikki Ponnu",
            cover: "assets/music_cover/varisu.jfif",
            source: "assets/mp3/Jimikki-Ponnu.mp3",
            url: "https://youtu.be/HfMTwkVQohM?feature=shared",
            favorited: false
          },
          {
            name: "Arjit Singh",
            artist: "Kesariya",
            cover: "assets/music_cover/kesariya.jpg",
            source: "assets/mp3/Kesariya.mp3",
            url: "https://youtu.be/BddP6PYo2gs?feature=shared",
            favorited: false
          },
          {
            name: "Vishal Chandresekar",
            artist: "Hey Sita",
            cover: "assets/music_cover/sita-ram.jpg",
            source: "assets/mp3/Oh-Sita-Hey-Rama.mp3",
            url: "https://youtu.be/hYFzyK9ExuM?feature=shared",
            favorited: false
          },
          {
            name: "Arjit Singh",
            artist: "Heeriye",
            cover: "assets/music_cover/heeriye.jfif",
            source: "assets/mp3/heeriye.mp3",
            url: "https://youtu.be/RLzC55ai0eo?feature=shared",
            favorited: false
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
          this.isPlaying = false;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
          this.isPlaying = true;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      },
      setVolume() {
        if (this.audio) {
          this.audio.volume = this.volume;
        }
      },
      playTrack(index) {
        this.currentTrackIndex = index;
        this.currentTrack = this.tracks[index];
        this.audio.src = this.currentTrack.source;
        this.audio.play();
        this.currentlyPlayingIndex = index;
        this.$refs.audioPlayer.play();
        this.isTimerPlaying = true;
        this.resetPlayer();
      },
      togglePlay() {
        if (this.$refs.audioPlayer.paused) {
          this.$refs.audioPlayer.play();
          this.isPlaying = true;
        } else {
          this.$refs.audioPlayer.pause();
          this.isPlaying = false;
        }
      },
      /*
      mounted() {
        document.body.addEventListener('keydown', this.handleSpacebarPress);
      },

      beforeDestroy() {
        document.body.removeEventListener('keydown', this.handleSpacebarPress);
      },
      handleSpacebarPress(event) {
        if (event.keyCode === 32) {
          event.preventDefault();
          this.togglePlayPause();
        }
      },
      togglePlayPause() {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play(this.currentlyPlayingIndex);
        }
      },*/
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };

      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
      this.audio.ontimeupdate = () => {
        this.generateTime();
      };
      this.audio.onloadedmetadata = () => {
        this.generateTime();
      };
      this.audio.onended = () => {
        this.nextTrack();
        this.isTimerPlaying = true;
      };
    },
  });


