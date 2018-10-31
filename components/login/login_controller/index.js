// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getConfig, getLicense} from 'mattermost-redux/selectors/entities/general';
import {RequestStatus} from 'mattermost-redux/constants';

import {login} from 'actions/views/login';
import {checkMfa} from 'actions/views/mfa';

import LoginController from './login_controller.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);
    const license = getLicense(state);

    const isLicensed = license.IsLicensed === 'true';

    const customBrandText = config.CustomBrandText;
    const customDescriptionText = config.CustomDescriptionText;
    const enableCustomBrand = config.EnableCustomBrand === 'true';
    const enableLdap = config.EnableLdap === 'true';
    const enableOpenServer = config.EnableOpenServer === 'true';
    const enableSaml = config.EnableSaml === 'true';
    const enableSignInWithEmail = config.EnableSignInWithEmail === 'true';
    const enableSignInWithUsername = config.EnableSignInWithUsername === 'true';
    const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
    const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
    const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
    const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
    const experimentalPrimaryTeam = config.ExperimentalPrimaryTeam;
    const ldapLoginFieldName = config.LdapLoginFieldName;
    const samlLoginButtonText = config.SamlLoginButtonText;
    const siteName = config.SiteName;
    const initializing = state.requests.users.logout.status === RequestStatus.SUCCESS || !state.storage.initialized;

    return {
        isLicensed,
        customBrandText,
        customDescriptionText,
        enableCustomBrand,
        enableLdap,
        enableOpenServer,
        enableSaml,
        enableSignInWithEmail,
        enableSignInWithUsername,
        enableSignUpWithEmail,
        enableSignUpWithGitLab,
        enableSignUpWithGoogle,
        enableSignUpWithOffice365,
        experimentalPrimaryTeam,
        ldapLoginFieldName,
        samlLoginButtonText,
        siteName,
        initializing,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            checkMfa,
            login,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginController);
