<template>
  <p id="infoText" v-html="infoText"></p>
</template>

<script>
// import { gsap } from 'gsap';

export default {
  data() {
    return {
      lastFMApiKey: "OGQ5MDZjNzI0OWIzNWE1NTU0ZDBmZThlYzBiYjc2MDM=",
      lastFMUser: "DamChtlv",
      infoTexts: [
        `<a href="https://twitter.com/DamChtlv" target="_blank">❔ Would <strong>love</strong> to hear <strong>your feedback</strong> on Twitter</a>`,
        `<img width="23" height="37" loading="lazy" src="https://emoji.gg/assets/emoji/kappa.png" /> Have you heard about <strong>Konami Code</strong> ?`,
      ],
      infoText: "💖 I hope you <strong>enjoy your journey</strong> here :)",
    };
  },

  methods: {
    /** Function to get time since specific date */
    timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years";
      }

      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months";
      }

      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days";
      }

      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours";
      }

      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes";
      }

      return Math.floor(seconds) + " seconds";
    },

    async fetchSpotifyLastSong() {
      try {
        const spotifyReq = await this.$axios.$get(
          "//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=" +
            this.lastFMUser +
            "&api_key=" +
            atob(this.lastFMApiKey) +
            "&format=json"
        );

        const artist = spotifyReq.recenttracks.track[0].artist["#text"];
        const track = spotifyReq.recenttracks.track[0].name;
        const albumImg = spotifyReq.recenttracks.track[0].image[1]["#text"];
        const trackDate =
          spotifyReq.recenttracks.track[0].date != undefined
            ? new Date(spotifyReq.recenttracks.track[0].date.uts * 1000)
            : null;

        return {
          artist,
          track,
          albumImg,
          trackDate,
        };
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSpotifyUserInfo() {
      try {
        const spotifyReq = await this.$axios.$get(
          "//ws.audioscrobbler.com/2.0/?method=user.getinfo&user=" +
            this.lastFMUser +
            "&api_key=" +
            atob(this.lastFMApiKey) +
            "&format=json"
        );

        console.log(spotifyReq);

        const userInfo = spotifyReq.user,
          userInfoSongsPlayed = spotifyReq.user.playcount,
          userInfoRegistered = this.timeSince(
            new Date(spotifyReq.user.registered.unixtime * 1000)
          );

        return {
          userInfo,
          userInfoSongsPlayed,
          userInfoRegistered,
        };
      } catch (err) {
        console.log(err);
      }
    },

    // Date info text
    addBirthdayDateInfoText() {
      // Jesus, i'm old
      const birthday = new Date(729298800000),
        today = new Date(),
        age = today.getFullYear() - birthday.getFullYear();

      this.infoTexts.push(
        `🧔 Still <strong>trying to grow a beard</strong> since <strong>${age} years</strong>!`
      );
    },

    // Date info text
    addSiteDateInfoText() {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const siteDate = new Date(2020, 10, 14);
      const todayDate = new Date();
      const diffDays = Math.round(Math.abs((siteDate - todayDate) / oneDay));

      this.infoTexts.push(
        `🎊 This site is <strong>${diffDays} days old</strong> today!`
      );
    },

    // Date info text
    addSpotifyInfoText() {
      const spotifyLastSong = this.fetchSpotifyLastSong();
      spotifyLastSong.then((response) => {
        const lastSongInfo = response.trackDate
          ? "🎵 <strong>" +
            response.track +
            "</strong> - <strong>" +
            response.artist +
            '</strong> 🎧 <span class="song-status">' +
            this.timeSince(response.trackDate) +
            " ago</span>"
          : "🎵 <strong>" +
            response.track +
            "</strong> - <strong>" +
            response.artist +
            '</strong> 🎧 <span class="song-status live">Live</span>';

        this.infoTexts.push(
          `<a href="https://www.youtube.com/results?search_query=${response.track}+${response.artist}" target="_blank">${lastSongInfo}</a>`
        );
      });

      const spotifyUserInfo = this.fetchSpotifyUserInfo();
      spotifyUserInfo.then((response) => {
        this.infoTexts.push(
          `<a href="https://www.last.fm/user/damchtlv" target="_blank">🎶 <strong>${response.userInfoSongsPlayed} songs</strong> listened in <strong>${response.userInfoRegistered}</strong> 😌</a>`
        );
      });
    },

    addDynamicInfoTexts() {
      // Date info text
      this.addBirthdayDateInfoText();

      // Date info text
      this.addSiteDateInfoText();

      // Spotify info text
      this.addSpotifyInfoText();
    },

    updateCurrentInfoText() {
      const random = Math.floor(Math.random() * this.infoTexts.length);
      this.infoText = this.infoTexts[random];
    },
  },

  mounted() {
    // Populate info texts
    this.addDynamicInfoTexts();

    // Update every 5s
    setInterval(this.updateCurrentInfoText, 5000);
  },
};
</script>

<style lang="scss">
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

#infoText {
  position: fixed;
  top: auto;
  left: 2%;
  bottom: 2%;
  z-index: 9990;
  vertical-align: middle;
  mix-blend-mode: difference;
  color: white;
}

.song-status {
    display: inline-block;
    color: white;
    font-size: 14px;
    padding: 0 3px;
    border-radius: 2px;
    background-color: #5F5E5E;
}

.live {
    font-weight: bold;
    text-transform: uppercase;
    background-color: red;
    animation: blinker 2s ease-out infinite;
}
</style>
