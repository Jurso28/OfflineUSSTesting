const msalConfig = {
    auth: {
      clientId: "bca1efa4-b74d-4138-860e-e2b30c472b54",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "https://testforuss.azurewebsites.net/indextest.html",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };

  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
  };

  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };