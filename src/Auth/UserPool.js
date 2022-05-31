import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData={
    UserPoolId: process.env.REACT_APP_USER_POOL_ID, //aws cognito > General Settings =>  'ap-southeast-2_OzlOUMEIy'
    ClientId: process.env.REACT_APP_CLIENT_ID, //App integration > App Client Settings => 'kc2e36kj1ge67c4nov0p9b83b'
    
};

const UserPool = new CognitoUserPool(poolData)

export default UserPool