export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "serverless-stack-dot-com-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://agam0yjtid.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_8il83Psr0",
    APP_CLIENT_ID: "4ke6hgk6mdn3pn8srph16jc7hl",
    IDENTITY_POOL_ID: "us-west-2:7c6a88af-b6e8-4d66-b7ed-cf91e2a03994"
  }
};
