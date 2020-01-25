import React, { useState } from 'react';
import './UserConsent.scss';
import { setPrivacyPreferences } from '../privacyPreferences';
import Checkbox from '../../../view/basic/components/Checkbox';
import Button from '../../../view/basic/components/Button';

export interface UserConsentState {
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
}
const UserPreferences: React.FC = () => {
    const [state, setState] = useState<UserConsentState>({
        enableAnalytics: true,
        enableErrorReporting: true
    });

    return (
        <div>
            <div>
                <Checkbox id="enable-basic-cookies" checked disabled />
                <label htmlFor="enable-basic-cookies">
                    <span>Necessary cookies (Required)</span>
                    <span>
                        These cookies are necessary for the website to function and cannot be switched off in our systems. These cookies do not store any personally identifiable
                        information.
                    </span>
                </label>
            </div>

            <div>
                <Checkbox id="enable-analytics" checked={state.enableAnalytics} onChange={(e) => setState({ ...state, enableAnalytics: e.target.checked })} />
                <label htmlFor="enable-analytics">
                    <span>Enable analtics (Optional)</span>
                    <span>
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are
                        the most and least popular and see how visitors move around the site.
                    </span>
                </label>
            </div>

            <div>
                <Checkbox id="enable-error-reporting" checked={state.enableErrorReporting} onChange={(e) => setState({ ...state, enableErrorReporting: e.target.checked })} />
                <label htmlFor="enable-error-reporting">
                    <span>Enable error reporting (Optional)</span>
                    <span>...</span>
                </label>
            </div>

            <Button
                onClick={() => {
                    setPrivacyPreferences(state.enableAnalytics, state.enableErrorReporting);
                }}
                variant="contained"
            >
                Update preferences
            </Button>
        </div>
    );
};

export default UserPreferences;
