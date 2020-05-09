require('dotenv').config();
const path = require('path');
console.log(`*********url~~~~~~~*******`);
console.log (`${process.env.SERVER_ADDRESS}/api/v1/${process.env.ORG_ID}/graphql`);
module.exports = {  
  client: {
    includes: ['ts', 'tsx'].map((extension) =>
      path.resolve(__dirname, `./src/**/*.${extension}`),
    ),
    service: {
      name: 'Remote-Schema',
      url: `${process.env.SERVER_ADDRESS}/api/v1/${process.env.ORG_ID}/graphql`,
      skipSSLValidation: true
    },
    addTypename: true,
  },
};
