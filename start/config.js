import config from 'config';
export default function () {
  if (!config.get('jwtPrivateKey')) {
    // console.error('fatal Error');
    process.exit(1);
  }
}
