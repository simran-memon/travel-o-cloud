import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

const AWSLogin = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);

export default withAuthenticator(AWSLogin);
