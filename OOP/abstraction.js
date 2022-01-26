class CassettePlayer {
    constructor(cassette) {
        this.cassette = cassette;

        this.play = function () {
            console.log(`I am playing ${this.cassette}`);
        };

        this.pause = function() {
            // pause cassette
        }

        this.stop = function() {
            // stop playing
        }

        this.record = function() {
            // record onto a cassette
        }

        this.forward = function() {
            // forward cassette
        }

        this.rewind = function() {
            // rewind cassette
        }

        this.eject = function() {
            // eject cassette
        }
    }
}

let cassetPlayer = new CassettePlayer("Hip-hop");
cassetPlayer.play();