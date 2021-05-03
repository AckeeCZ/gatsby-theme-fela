const environments = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};

export const isEnvDevelopment = process.env.NODE_ENV === environments.DEVELOPMENT;
export const isEnvProduction = process.env.NODE_ENV === environments.PRODUCTION;

export const isLocalhost =
  typeof window !== 'undefined' &&
  Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
  );

export default environments;
