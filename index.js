function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();
    const dinnerTogether = string === ("Let\'s have dinner together!")
  
    console.log(checkForLowerCase);
    console.log(checkForUpperCase);
    console.log(dinnerTogether)
    if (checkForLowerCase) {
      return `I can\'t hear you!`;
    }
  
    if (checkForUpperCase) {
      return `YES INDEED!`;
    }

    if (dinnerTogether) {
        return 'I would love to!'
    }
  }