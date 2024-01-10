(function() {
    'use strict';

    var e, t, n, r, i, o, a, s, c, l, u, d, p, m, g, h, y, f, v, S, A, w, b, I, T, P, C, k, E, R, D, F, L, M, U, B, O, N, x, W, q, V, H, G, K, z, _, j, Q, Y, $, Z, J, X, ee, te, ne, re, ie, oe, ae, se, ce, le, ue, de, pe, me, ge, he, ye, fe, ve, Se, Ae, we, be, Ie, Te, Pe, Ce, ke, Ee, Re, De, Fe, Le, Me, Ue, Be, Oe, Ne, xe, We, qe, Ve, He, Ge, Ke, ze, _e, je, Qe, Ye, $e, Ze, Je, Xe, et, tt, nt, rt, it, ot, at, st, ct, lt, ut, dt, pt, mt, gt, ht, yt, ft, vt, St, At, wt, bt, It, Tt, Pt, Ct, kt, Et, Rt, Dt, Ft, Lt, Mt, Ut, Bt, Ot, Nt, xt, Wt, qt, Vt, Ht, Gt, Kt, zt, _t, jt, Qt, Yt, $t, Zt, Jt, Xt, en, tn, nn, rn, on, an, sn, cn, ln, un, dn, pn, mn, gn, hn, yn, fn, vn, Sn, An, wn, bn, In, Tn, Pn, Cn, kn, En, Rn, Dn, Fn, Ln, Mn, Un, Bn, On, Nn, xn, Wn, qn, Vn, Hn, Gn, Kn, zn, _n, jn, Qn, Yn, $n, Zn, Jn, Xn, er, tr, nr, rr, ir, or, ar, sr, cr, lr, ur, dr, pr, mr, gr = {};
    Object.defineProperty(gr, "__esModule", {
        value: !0
    }),
    gr.ZoneISOFormatType = gr.BiometryAvailability = gr.BiometryMethod = gr.BiometricPolicy = gr.AppStoreProductAccountType = gr.AppStoreProductIntroductoryPaymentMode = gr.AppStoreProductSubscriptionPeriodUnit = gr.B5xOpiLogLevel = gr.BiometryType = gr.AccountState = gr.AddressSection = gr.OpenUrlType = gr.ViewItemSpacing = gr.ItemDetailState = gr.ItemDetailBannerType = gr.ItemDetailPrimaryAction = gr.SortOrder = gr.SortKey = gr.ElementBorderStyle = gr.TotpIndicatorColor = gr.PasswordGeneratorButtonAction = gr.AttestationStatementFormatIdentifiers = gr.OpCbItemIntegrationInformation = gr.B5xBrowser = gr.AliasState = gr.VaultType = gr.UserState = gr.BillingStatus = gr.FileStatus = gr.AccountType = e = gr.FillStatus = gr.CalloutBannerVariant = gr.EditItemSectionKind = gr.EditItemSpacing = gr.SaveManagerIntegration = gr.UsoProvider = gr.Action = gr.PostFill = gr.ContactType = gr.FormDesignation = gr.AutofillType = gr.SuggestedIntegration = gr.ResolveMode = gr.ElementType = gr.AutofilledBy = gr.ButtonStyle = gr.ButtonState = gr.EmptyContentBackground = gr.IconShape = gr.IconBadge = void 0,
    gr.ValidOtpSchemes = gr.SignInTextInputId = gr.WordListType = gr.SeparatorType = gr.PasswordType = gr.MdLinkType = gr.VaultSimplifiedPermissionsSummary = gr.VaultPermissionViewRemoveWarning = gr.VaultSimplifiedPermissions = gr.HeaderAsset = gr.ItemCatalogTheme = gr.VaultPermissionUpdateType = gr.UserType = gr.GuidedExperienceAuthMethod = gr.GroupType = gr.GroupState = gr.MessageBoxType = gr.QrCodeSource = gr.TrayAction = gr.HoldToRevealMode = gr.Format = gr.SyncFlag = gr.MobileTab = gr.OpAppLockState = gr.CategoryId = gr.LockState = gr.KeyOp = gr.KeyAlgorithm = gr.KeyType = gr.ThemedIconFile = gr.DefaultIconFile = gr.ItemState = gr.CreateItemType = gr.PrivacyCardSpendLimitDuration = gr.PrivacyCardType = gr.FundingAccountApiState = gr.PrivacySpendLimit = gr.OauthErrorType = gr.BrexCardStatus = gr.BrexUserStatus = gr.BrexUserPermissionStatus = gr.BrexLimitDuration = gr.BrexCurrency = gr.BrexLimitType = gr.BrexCardType = gr.BrexEnvironment = gr.TimePadding = gr.HourCycle = gr.HourIndexing = gr.ZoneISOFieldRequirement = void 0,
    gr.IndicatorPillColor = gr.StepperChangeType = gr.QXOnboardingAction = gr.QuickAccessOpenedBy = gr.OfflineIndicatorAction = gr.Roles = gr.WindowType = gr.LockScreenAccountPreviewMode = gr.Status = gr.EssentialSetupWhatsNewHeroIllustration = gr.EssentialSetupIllustration = gr.EssentialSetupPageNavigationButtonEmphasis = gr.EssentialSetupPageId = gr.EssentialSetupFeatureIllustration = gr.EssentialSetupImportIllustration = gr.CredentialResultStatus = gr.AlertBannerType = gr.ManageAccountTelemetrySettingsOptionId = gr.ManageAccountIllustration = gr.TextInputFieldType = gr.InvitationRole = gr.ManageAccountColor = gr.MaCategoryId = gr.ToastBehavior = gr.SecondaryView = gr.SbCollectionType = gr.SidebarElementSpacerType = gr.ShareItemErrorFormat = gr.ShareItemAvailableToMenuEntryId = gr.ShareItemLinkExpirationMenuEntryId = gr.ItemAction = gr.ItemLocationMessageElementSize = gr.FieldPriorityOrder = gr.InAppPurchaseButtonStyle = gr.EmptyContentButtonStyle = gr.EditItemSaveValueAddFieldType = gr.ItemUrlMode = gr.AddFileSource = gr.EditItemElementInputAutoCapitalization = gr.EditItemElementInputKeyboard = gr.EditItemIconMenuAction = gr.EditItemCreateBannerType = gr.CopyOption = gr.CreateButtonStyle = gr.SignInFieldViewContext = gr.SignInFieldAction = gr.VaultCollectionDetailState = gr.Tristate = gr.DismissAction = gr.OpAppAccountSignOutReason = void 0,
    gr.VaultPermissionsMethod = gr.ApiValidateSignInAddressError = gr.ApiValidateSecretKeyError = gr.ApiValidateEmailError = gr.ApiValidateVaultPermissionsChangeError = gr.ApiManageVaultAccessError = gr.ApiGetUsersError = gr.ApiGetGroupsError = gr.AccessorType = gr.Error = gr.AuthPromptType = gr.ErrorRequestingDSecretProxy = gr.SystemUnlockResponse = gr.OpAppBrowserSupportSetup = gr.BrowserHelperResponse = gr.BrowserSupportResponse = gr.BrowserVerificationFailedReason = gr.NmCurrentStatusRequest = gr.NmAuthorizationResponse = gr.NmRequestDelegatedSessionError = gr.VaultItemViewability = gr.ServiceIntegration = gr.EmailAliasProvider = gr.AliasError = gr.AndroidWebAuthnError = gr.BiometricUnlock = gr.AppleNotificationAuthorizationResponse = gr.AppleNotificationAuthorizationStatusResponse = gr.Level = gr.MonthDayDisplay = gr.PeriodDisplay = gr.XpcDisconnectReason = gr.CodeSignatureError = gr.BiometricAuthResponse = gr.AppStoreError = gr.OpiRequestError = gr.FillStatusError = gr.SaveManagerError = gr.AddressType = gr.WatchtowerCardType = gr.OAuthRejectedError = gr.SignInResponseContext = gr.ManualSignInSubmitAction = gr.EmergencyKitSignInButtonAction = gr.CancelButtonStyle = gr.WelcomeScreenSlideID = gr.SignInButtonStyle = gr.ManualSignInFormType = gr.TextJustification = gr.SettingsElementRadioOptionIllustration = void 0,
    gr.CcType = gr.CheckboxSetting = gr.SettingsCalloutVariant = gr.ItemListWatchtower = gr.MobileHomeScreenType = gr.MfaInProgressKind = gr.EssentialSetupRequest = gr.AlertBannerDialog = gr.ManageAccountUserType = gr.ManageAccountUserVaultsListResponseError = gr.ConfirmUserResponse = gr.ResendInviteResponse = gr.CancelInviteResponse = gr.ManageAccountResponseError = gr.ClientDataType = gr.WindowFocusPurpose = gr.WebAuthnSignUpAddAccountResponse = gr.WatchtowerExclusionType = gr.ItemListEntryError = gr.VaultError = gr.AutoFillItemType = gr.ApiType = gr.FreeFamilyOption = gr.FrontendAction = gr.AccountLockState = gr.WebMdError = gr.MdError = gr.VaultPermissionsCannotModifyReason = void 0,
    function(e) {
        e.Favorite = "favorite",
        e.Lock = "lock",
        e.Chevron = "chevron",
        e.ChevronPressed = "chevronPressed",
        e.Key = "key";
    }(t || (gr.IconBadge = t = {})),
    function(e) {
        e.Circle = "circle",
        e.RoundedRect = "roundedRect";
    }(n || (gr.IconShape = n = {})),
    function(e) {
        e.Vault = "vault",
        e.Archive = "archive",
        e.Favorites = "favorites",
        e.Categories = "categories",
        e.WatchtowerCompromised = "watchtowerCompromised",
        e.WatchtowerVulnerable = "watchtowerVulnerable",
        e.WatchtowerReused = "watchtowerReused",
        e.WatchtowerWeak = "watchtowerWeak",
        e.WatchtowerUnsecured = "watchtowerUnsecured",
        e.WatchtowerInactiveMfa = "watchtowerInactiveMfa",
        e.WatchtowerPasskeyAvailable = "watchtowerPasskeyAvailable",
        e.WatchtowerExpiring = "watchtowerExpiring";
    }(r || (gr.EmptyContentBackground = r = {})),
    function(e) {
        e.Enabled = "enabled",
        e.Disabled = "disabled";
    }(i || (gr.ButtonState = i = {})),
    function(e) {
        e.Default = "default",
        e.Destructive = "destructive",
        e.DestructiveAlt = "destructiveAlt",
        e.Primary = "primary",
        e.PrimaryAlt = "primaryAlt",
        e.PrimaryWhite = "primaryWhite",
        e.Transparent = "transparent",
        e.TransparentBlue = "transparentBlue";
    }(o || (gr.ButtonStyle = o = {})),
    function(e) {
        e.Us = "us",
        e.Browser = "browser";
    }(a || (gr.AutofilledBy = a = {})),
    function(e) {
        e.Unknown = "unknown",
        e.Button = "button",
        e.Checkbox = "checkbox",
        e.Color = "color",
        e.Date = "date",
        e.DatetimeLocal = "datetime-local",
        e.Email = "email",
        e.File = "file",
        e.Hidden = "hidden",
        e.Image = "image",
        e.Month = "month",
        e.Number = "number",
        e.Password = "password",
        e.Radio = "radio",
        e.Range = "range",
        e.Reset = "reset",
        e.Search = "search",
        e.Submit = "submit",
        e.Tel = "tel",
        e.Text = "text",
        e.Time = "time",
        e.Url = "url",
        e.Week = "week",
        e.SelectOne = "select-one",
        e.SelectMultiple = "select-multiple",
        e.Textarea = "textarea";
    }(s || (gr.ElementType = s = {})),
    function(e) {
        e.ActiveFieldOnly = "activeFieldOnly",
        e.AllFields = "allFields",
        e.UserEdited = "userEdited";
    }(c || (gr.ResolveMode = c = {})),
    function(e) {
        e.Brex = "Brex",
        e.Privacy = "Privacy";
    }(l || (gr.SuggestedIntegration = l = {})),
    function(e) {
        e.SshKeyTitle = "ssh-key-title",
        e.SshKey = "ssh-key",
        e.None = "none",
        e.Name = "name",
        e.HonorificPrefix = "honorific-prefix",
        e.GivenName = "given-name",
        e.AdditionalName = "additional-name",
        e.FamilyName = "family-name",
        e.HonorificSuffix = "honorific-suffix",
        e.Nickname = "nickname",
        e.OrganizationTitle = "organization-title",
        e.Username = "username",
        e.NewPassword = "new-password",
        e.CurrentPassword = "current-password",
        e.OneTimeCode = "one-time-code",
        e.Organization = "organization",
        e.StreetAddress = "street-address",
        e.AddressLine1 = "address-line1",
        e.AddressLine2 = "address-line2",
        e.AddressLine3 = "address-line3",
        e.AddressLevel1 = "address-level1",
        e.AddressLevel2 = "address-level2",
        e.AddressLevel3 = "address-level3",
        e.AddressLevel4 = "address-level4",
        e.Country = "country",
        e.CountryName = "country-name",
        e.PostalCode = "postal-code",
        e.CcName = "cc-name",
        e.CcGivenName = "cc-given-name",
        e.CcAdditionalName = "cc-additional-name",
        e.CcFamilyName = "cc-family-name",
        e.CcNumber = "cc-number",
        e.CcExp = "cc-exp",
        e.CcExpMonth = "cc-exp-month",
        e.CcExpYear = "cc-exp-year",
        e.CcCsc = "cc-csc",
        e.CcType = "cc-type",
        e.TransactionCurrency = "transaction-currency",
        e.TransactionAmount = "transaction-amount",
        e.Language = "language",
        e.Bday = "bday",
        e.BdayDay = "bday-day",
        e.BdayMonth = "bday-month",
        e.BdayYear = "bday-year",
        e.Sex = "sex",
        e.Url = "url",
        e.Photo = "photo",
        e.Tel = "tel",
        e.TelCountryCode = "tel-country-code",
        e.TelNational = "tel-national",
        e.TelAreaCode = "tel-area-code",
        e.TelLocal = "tel-local",
        e.TelLocalPrefix = "tel-local-prefix",
        e.TelLocalSuffix = "tel-local-suffix",
        e.TelExtension = "tel-extension",
        e.Email = "email",
        e.Impp = "impp",
        e.CryptoAddress = "crypto-address",
        e.CryptoRecoverySeed = "crypto-recovery-seed",
        e.RecoveryCode = "recovery-code";
    }(u || (gr.AutofillType = u = {})),
    function(e) {
        e.None = "none",
        e.Login = "login",
        e.Registration = "registration",
        e.ChangePassword = "change-password",
        e.OneTimeCode = "one-time-code",
        e.ChangeEmail = "change-email",
        e.SshKey = "ssh-key",
        e.Payment = "payment";
    }(d || (gr.FormDesignation = d = {})),
    function(e) {
        e.Home = "home",
        e.Work = "work",
        e.Mobile = "mobile",
        e.Fax = "fax",
        e.Pager = "pager";
    }(p || (gr.ContactType = p = {})),
    function(e) {
        e.FocusLastFilledField = "focusLastFilledField",
        e.FocusNextField = "focusNextField",
        e.FocusActiveField = "focusActiveField",
        e.Submit = "submit";
    }(m || (gr.PostFill = m = {})),
    function(e) {
        e.ClickOpid = "clickOpid",
        e.ClickQuerySelector = "clickQuerySelector",
        e.FillOpid = "fillOpid",
        e.FillQuerySelector = "fillQuerySelector",
        e.FocusOpid = "focusOpid",
        e.Submit = "submit";
    }(g || (gr.Action = g = {})),
    function(e) {
        e.Amazon = "amazon",
        e.Apple = "apple",
        e.Discord = "discord",
        e.Facebook = "facebook",
        e.GitHub = "github",
        e.Google = "google",
        e.Microsoft = "microsoft",
        e.Okta = "okta",
        e.Slack = "slack",
        e.Twitter = "twitter";
    }(h || (gr.UsoProvider = h = {})),
    function(e) {
        e.Ramp = "ramp";
    }(y || (gr.SaveManagerIntegration = y = {})),
    function(e) {
        e.None = "none",
        e.Single = "single",
        e.Double = "double";
    }(f || (gr.EditItemSpacing = f = {})),
    function(e) {
        e.Title = "title",
        e.Primary = "primary",
        e.Secondary = "secondary",
        e.Tags = "tags",
        e.CallToAction = "callToAction",
        e.ItemLocation = "itemLocation";
    }(v || (gr.EditItemSectionKind = v = {})),
    function(e) {
        e.Subtle = "subtle",
        e.Warning = "warning",
        e.Info = "info",
        e.SolidBlue = "solidBlue",
        e.SolidPurple = "solidPurple",
        e.SolidGreen = "solidGreen",
        e.SolidRed = "solidRed";
    }(S || (gr.CalloutBannerVariant = S = {})),
    function(e) {
        e.None = "none",
        e.InProgress = "inProgress";
    }(A || (e = gr.FillStatus = A = {})),
    function(e) {
        e.Individual = "I",
        e.Family = "F",
        e.Team = "B",
        e.Unsupported = "Unsupported";
    }(w || (gr.AccountType = w = {})),
    function(e) {
        e.Uploading = "Uploading",
        e.Available = "Available",
        e.Missing = "Missing";
    }(b || (gr.FileStatus = b = {})),
    function(e) {
        e.Active = "A",
        e.Pending = "P",
        e.CancelAtEnd = "C",
        e.Frozen = "F",
        e.Lapsed = "L",
        e.Trialing = "T",
        e.Unsupported = "Unsupported";
    }(I || (gr.BillingStatus = I = {})),
    function(e) {
        e.PendingActivation = "P",
        e.Active = "A",
        e.Suspended = "S",
        e.Deleted = "D",
        e.RecoveryStarted = "1",
        e.RecoveryAccepted = "2",
        e.Registered = "R",
        e.EmailVerifiedIncomplete = "V",
        e.ProvisionPending = "T",
        e.ProvisionStarted = "3",
        e.ProvisionAccepted = "4",
        e.ProvisionSuspended = "5",
        e.Purging = "X",
        e.Purged = "Z",
        e.Unsupported = "Unsupported";
    }(T || (gr.UserState = T = {})),
    function(e) {
        e.Personal = "P",
        e.Everyone = "E",
        e.Transfer = "T",
        e.UserCreated = "U",
        e.System = "S",
        e.GeneratedPasswords = "G",
        e.Unsupported = "Unsupported";
    }(P || (gr.VaultType = P = {})),
    function(e) {
        e.Enabled = "enabled",
        e.Disabled = "disabled",
        e.Deleted = "deleted";
    }(C || (gr.AliasState = C = {})),
    function(e) {
        e.Chrome = "chrome",
        e.Firefox = "firefox",
        e.SafariMacos = "safari-macos",
        e.SafariIos = "safari-ios";
    }(k || (gr.B5xBrowser = k = {})),
    function(e) {
        e.Brex = "Brex";
    }(E || (gr.OpCbItemIntegrationInformation = E = {})),
    function(e) {
        e.Packed = "packed",
        e.Tpm = "tpm",
        e.AndroidKey = "android-key",
        e.AndroidSafetynet = "android-safetynet",
        e.FidoU2f = "fido-u2f",
        e.Apple = "apple",
        e.None = "none";
    }(R || (gr.AttestationStatementFormatIdentifiers = R = {})),
    function(e) {
        e.Save = "save",
        e.Generate = "generate",
        e.Done = "done";
    }(D || (gr.PasswordGeneratorButtonAction = D = {})),
    function(e) {
        e.Normal = "Normal",
        e.Warning = "Warning";
    }(F || (gr.TotpIndicatorColor = F = {})),
    function(e) {
        e.Top = "Top",
        e.Middle = "Middle",
        e.Bottom = "Bottom",
        e.TopAndBottom = "TopAndBottom";
    }(L || (gr.ElementBorderStyle = L = {})),
    function(e) {
        e.DateCreated = "dateCreated",
        e.DateModified = "dateModified",
        e.Title = "title",
        e.RecentlyUsed = "recentlyUsed",
        e.FrequentlyUsed = "frequentlyUsed",
        e.PasswordStrength = "passwordStrength",
        e.MostRelevant = "mostRelevant";
    }(M || (gr.SortKey = M = {})),
    function(e) {
        e.Ascending = "ascending",
        e.Descending = "descending";
    }(U || (gr.SortOrder = U = {})),
    function(e) {
        e.Edit = "edit",
        e.Autofill = "autofill",
        e.OpenAndFill = "openAndFill",
        e.OpenUrl = "openUrl";
    }(B || (gr.ItemDetailPrimaryAction = B = {})),
    function(e) {
        e.FrozenAccount = "frozenAccount",
        e.SsoMigration = "ssoMigration";
    }(O || (gr.ItemDetailBannerType = O = {})),
    function(e) {
        e.Active = "active",
        e.Deleted = "deleted",
        e.Archived = "archived";
    }(N || (gr.ItemDetailState = N = {})),
    function(e) {
        e.Single = "single",
        e.Double = "double";
    }(x || (gr.ViewItemSpacing = x = {})),
    function(e) {
        e.Url = "Url",
        e.Email = "Email",
        e.Phone = "Phone",
        e.MapApple = "MapApple",
        e.MapGoogle = "MapGoogle",
        e.MapDuckDuckGo = "MapDuckDuckGo";
    }(W || (gr.OpenUrlType = W = {})),
    function(e) {
        e.Street = "Street",
        e.City = "City",
        e.Country = "Country",
        e.Zip = "Zip",
        e.State = "State";
    }(q || (gr.AddressSection = q = {})),
    function(e) {
        e.Registered = "R",
        e.Active = "A",
        e.Suspended = "S",
        e.Deleted = "D",
        e.Purging = "X",
        e.Purged = "Z",
        e.Unsupported = "Unsupported";
    }(V || (gr.AccountState = V = {})),
    function(e) {
        e.FaceID = "faceID",
        e.TouchID = "touchID",
        e.Passcode = "passcode",
        e.None = "none";
    }(H || (gr.BiometryType = H = {})),
    function(e) {
        e.Info = "info",
        e.Warn = "warn",
        e.Error = "error",
        e.Exception = "exception";
    }(G || (gr.B5xOpiLogLevel = G = {})),
    function(e) {
        e.Day = "day",
        e.Week = "week",
        e.Month = "month",
        e.Year = "year";
    }(K || (gr.AppStoreProductSubscriptionPeriodUnit = K = {})),
    function(e) {
        e.PayAsYouGo = "payAsYouGo",
        e.PayUpFront = "payUpFront",
        e.FreeTrial = "freeTrial";
    }(z || (gr.AppStoreProductIntroductoryPaymentMode = z = {})),
    function(e) {
        e.Individual = "individual",
        e.Family = "family",
        e.TeamStarterPack = "teamStarterPack";
    }(_ || (gr.AppStoreProductAccountType = _ = {})),
    function(e) {
        e.BiometricsOnly = "BiometricsOnly",
        e.BiometricsOrWatch = "BiometricsOrWatch",
        e.WatchOnly = "WatchOnly",
        e.NoneAvailable = "NoneAvailable";
    }(j || (gr.BiometricPolicy = j = {})),
    function(e) {
        e.Unknown = "Unknown",
        e.NoneAvailable = "NoneAvailable",
        e.TouchId = "TouchId",
        e.FaceId = "FaceId";
    }(Q || (gr.BiometryMethod = Q = {})),
    function(e) {
        e.Available = "Available",
        e.NotAvailable = "NotAvailable",
        e.SensorUnavailable = "SensorUnavailable",
        e.NotEnrolled = "NotEnrolled",
        e.Lockout = "Lockout",
        e.NotInteractive = "NotInteractive",
        e.WatchNotAvailable = "WatchNotAvailable",
        e.EnrollmentChanged = "EnrollmentChanged",
        e.Disconnected = "Disconnected",
        e.NotPaired = "NotPaired",
        e.Unknown = "Unknown";
    }(Y || (gr.BiometryAvailability = Y = {})),
    function(e) {
        e.Basic = "basic",
        e.Extended = "extended";
    }($ || (gr.ZoneISOFormatType = $ = {})),
    function(e) {
        e.Required = "required",
        e.Optional = "optional",
        e.Excluded = "excluded";
    }(Z || (gr.ZoneISOFieldRequirement = Z = {})),
    function(e) {
        e.Zero = "zero",
        e.One = "one";
    }(J || (gr.HourIndexing = J = {})),
    function(e) {
        e.Twelve = "twelve",
        e.TwentyFour = "twentyFour";
    }(X || (gr.HourCycle = X = {})),
    function(e) {
        e.Raw = "raw",
        e.Padded = "padded";
    }(ee || (gr.TimePadding = ee = {})),
    function(e) {
        e.Production = "Production",
        e.Staging = "Staging";
    }(te || (gr.BrexEnvironment = te = {})),
    function(e) {
        e.Virtual = "VIRTUAL",
        e.Physical = "PHYSICAL";
    }(ne || (gr.BrexCardType = ne = {})),
    function(e) {
        e.Card = "CARD",
        e.User = "USER";
    }(re || (gr.BrexLimitType = re = {})),
    function(e) {
        e.Usd = "USD";
    }(ie || (gr.BrexCurrency = ie = {})),
    function(e) {
        e.Monthly = "MONTHLY",
        e.Quarterly = "QUARTERLY",
        e.Yearly = "YEARLY",
        e.OneTime = "ONE_TIME";
    }(oe || (gr.BrexLimitDuration = oe = {})),
    function(e) {
        e.Granted = "GRANTED",
        e.Denied = "DENIED",
        e.Unknown = "UNKNOWN";
    }(ae || (gr.BrexUserPermissionStatus = ae = {})),
    function(e) {
        e.Invited = "INVITED",
        e.Active = "ACTIVE",
        e.Closed = "CLOSED",
        e.Disabled = "DISABLED",
        e.Deleted = "DELETED",
        e.PendingActivation = "PENDING_ACTIVATION";
    }(se || (gr.BrexUserStatus = se = {})),
    function(e) {
        e.Active = "ACTIVE",
        e.Shipped = "SHIPPED",
        e.Expired = "EXPIRED",
        e.Locked = "LOCKED",
        e.Terminated = "TERMINATED";
    }(ce || (gr.BrexCardStatus = ce = {})),
    function(e) {
        e.InvalidRequest = "invalid_request",
        e.InvalidClient = "invalid_client",
        e.InvalidGrant = "invalid_grant",
        e.InvalidScope = "invalid_scope",
        e.UnauthorizedClient = "unauthorized_client",
        e.UnsupportedGrantType = "unsupported_grant_type",
        e.Unknown = "unknown";
    }(le || (gr.OauthErrorType = le = {})),
    function(e) {
        e.Once = "Once",
        e.Transaction = "Transaction",
        e.Monthly = "Monthly",
        e.Annually = "Annually",
        e.Forever = "Forever";
    }(ue || (gr.PrivacySpendLimit = ue = {})),
    function(e) {
        e.Enabled = "ENABLED",
        e.Pending = "PENDING";
    }(de || (gr.FundingAccountApiState = de = {})),
    function(e) {
        e.MerchantLocked = "MERCHANT_LOCKED",
        e.SingleUse = "SINGLE_USE";
    }(pe || (gr.PrivacyCardType = pe = {})),
    function(e) {
        e.Transaction = "TRANSACTION",
        e.Monthly = "MONTHLY",
        e.Annually = "ANNUALLY",
        e.Forever = "FOREVER";
    }(me || (gr.PrivacyCardSpendLimitDuration = me = {})),
    function(e) {
        e.Login = "login",
        e.CreditCard = "credit-card",
        e.ApiKey = "api-key",
        e.CryptoWallet = "crypto-wallet";
    }(ge || (gr.CreateItemType = ge = {})),
    function(e) {
        e.Active = "Active",
        e.Archived = "Archived",
        e.Deleted = "Deleted";
    }(he || (gr.ItemState = he = {})),
    function(e) {
        e.AccountFamily = "accountFamily",
        e.AccountIndividual = "accountIndividual",
        e.AccountTeam = "accountTeam",
        e.AllCategories = "allCategories",
        e.AllItems = "allItems",
        e.ApiCredentials = "apiCredentials",
        e.Archive = "archive",
        e.AutoFill1Password = "autoFill1Password",
        e.AutoFillKey = "autoFillKey",
        e.AutoFillKeyboard = "autoFillKeyboard",
        e.AutoFillSettings = "autoFillSettings",
        e.AutoFillToggle = "autoFillToggle",
        e.BankAccount = "bankAccount",
        e.BrexCorporate = "brexCorporate",
        e.BrexVault = "brexVault",
        e.BrexVendor = "brexVendor",
        e.CreditCard = "creditCard",
        e.CreditCardAmex = "creditCardAmex",
        e.CreditCardDiscover = "creditCardDiscover",
        e.CreditCardMastercard = "creditCardMastercard",
        e.CreditCardVisa = "creditCardVisa",
        e.CryptoWallet = "cryptoWallet",
        e.Database = "database",
        e.DeviceListAndroidPhone = "deviceListAndroidPhone",
        e.DeviceListAndroidTablet = "deviceListAndroidTablet",
        e.DeviceListBrave = "deviceListBrave",
        e.DeviceListChrome = "deviceListChrome",
        e.DeviceListCLI = "deviceListCLI",
        e.DeviceListEdge = "deviceListEdge",
        e.DeviceListFirefox = "deviceListFirefox",
        e.DeviceListGeneric = "deviceListGeneric",
        e.DeviceListIMac = "deviceListIMac",
        e.DeviceListIPad = "deviceListIPad",
        e.DeviceListIPhone = "deviceListIPhone",
        e.DeviceListMacbookPro = "deviceListMacbookPro",
        e.DeviceListOpera = "deviceListOpera",
        e.DeviceListPC = "deviceListPC",
        e.DeviceListPCLaptop = "deviceListPCLaptop",
        e.DeviceListSafari = "deviceListSafari",
        e.Document = "document",
        e.DocumentImage = "documentImage",
        e.DocumentSpreadsheet = "documentSpreadsheet",
        e.DocumentText = "documentText",
        e.DocumentZip = "documentZip",
        e.DriverLicense = "driverLicense",
        e.Email = "email",
        e.EmptyAllItems = "emptyAllItems",
        e.EmptyArchive = "emptyArchive",
        e.EmptyFavorites = "emptyFavorites",
        e.EmptyNoVaults = "emptyNoVaults",
        e.EmptyRecentlyDeleted = "emptyRecentlyDeleted",
        e.EmptyWatchtowerCompromisedWebsites = "emptyWatchtowerCompromisedWebsites",
        e.EmptyWatchtowerDashboard = "emptyWatchtowerDashboard",
        e.EmptyWatchtowerExpiring = "emptyWatchtowerExpiring",
        e.EmptyWatchtowerInactiveMfa = "emptyWatchtowerInactiveMfa",
        e.EmptyWatchtowerPasskeyAvailable = "emptyWatchtowerPasskeyAvailable",
        e.EmptyWatchtowerPasswordStrength = "emptyWatchtowerPasswordStrength",
        e.EmptyWatchtowerDuplicateItem = "emptyWatchtowerDuplicateItem",
        e.EmptyWatchtowerReusedPasswords = "emptyWatchtowerReusedPasswords",
        e.EmptyWatchtowerUnsecuredWebsites = "emptyWatchtowerUnsecuredWebsites",
        e.EmptyWatchtowerVulnerablePasswords = "emptyWatchtowerVulnerablePasswords",
        e.EmptyWatchtowerWeakPasswords = "emptyWatchtowerWeakPasswords",
        e.Everything = "everything",
        e.Fastmail = "fastmail",
        e.Favorites = "favorites",
        e.Git = "git",
        e.HighlightsBrowserExtension = "highlightsBrowserExtension",
        e.HighlightsDevices = "highlightsDevices",
        e.HighlightsFaceID = "highlightsFaceID",
        e.HighlightsFamily = "highlightsFamily",
        e.HighlightsHandUp = "highlightsHandUp",
        e.HighlightsItemCatalog = "highlightsItemCatalog",
        e.HighlightsItemSharing = "highlightsItemSharing",
        e.HighlightsKey = "highlightsKey",
        e.HighlightsManaging = "highlightsManaging",
        e.HighlightsPasswordlessAuthentication = "highlightsPasswordlessAuthentication",
        e.HighlightsPerformance = "highlightsPerformance",
        e.HighlightsPlatforms = "highlightsPlatforms",
        e.HighlightsQuickAccess = "highlightsQuickAccess",
        e.HighlightsRedesign = "highlightsRedesign",
        e.HighlightsSecurity = "highlightsSecurity",
        e.HighlightsStrongPasswords = "highlightsStrongPasswords",
        e.HighlightsSupport = "highlightsSupport",
        e.HighlightsTeam = "highlightsTeam",
        e.HighlightsWatchtower = "highlightsWatchtower",
        e.HighlightsWebsite = "highlightsWebsite",
        e.HomeAllItems = "homeAllItems",
        e.HomeArchived = "homeArchived",
        e.HomeCategories = "homeCategories",
        e.HomeFavorites = "homeFavorites",
        e.HomeFrequentlyUsed = "homeFrequentlyUsed",
        e.HomeNearby = "homeNearby",
        e.HomePinned = "homePinned",
        e.HomeRecentlyAdded = "homeRecentlyAdded",
        e.HomeRecentlyCreated = "homeRecentlyCreated",
        e.HomeRecentlyDeleted = "homeRecentlyDeleted",
        e.HomeRecentlyModified = "homeRecentlyModified",
        e.HomeRecentlyUsed = "homeRecentlyUsed",
        e.HomeScreenBillboardAppleWatchTransparent = "homeScreenBillboardAppleWatchTransparent",
        e.HomeScreenBillboardCustomizeHomeTransparent = "homeScreenBillboardCustomizeHomeTransparent",
        e.HomeScreenBillboardIllustrationAppleWatch = "homeScreenBillboardIllustrationAppleWatch",
        e.HomeScreenBillboardIllustrationAutoFill = "homeScreenBillboardIllustrationAutoFill",
        e.HomeScreenBillboardIllustrationCustomizeHome = "homeScreenBillboardIllustrationCustomizeHome",
        e.HomeScreenBillboardIllustrationLabs = "homeScreenBillboardIllustrationLabs",
        e.HomeScreenBillboardIllustrationPinnedFields = "homeScreenBillboardIllustrationPinnedFields",
        e.HomeScreenBillboardIllustrationSafariExtension = "homeScreenBillboardIllustrationSafariExtension",
        e.HomeScreenBillboardIllustrationWhatsNew = "homeScreenBillboardIllustrationWhatsNew",
        e.HomeScreenBillboardLabsTransparent = "homeScreenBillboardLabsTransparent",
        e.HomeScreenBillboardPinnedFieldsTransparent = "homeScreenBillboardPinnedFieldsTransparent",
        e.HomeScreenBillboardProfileTransparent = "homeScreenBillboardProfileTransparent",
        e.HomeScreenBillboardSafariTransparent = "homeScreenBillboardSafariTransparent",
        e.HomeScreenBillboardTipsTransparent = "homeScreenBillboardTipsTransparent",
        e.HomeScreenBillboardWarningTransparent = "homeScreenBillboardWarningTransparent",
        e.HomeScreenBillboardWhatsNewTransparent = "homeScreenBillboardWhatsNewTransparent",
        e.HomeScreenInterstitialAppleWatch = "homeScreenInterstitialAppleWatch",
        e.HomeScreenInterstitialEmptyHome = "homeScreenInterstitialEmptyHome",
        e.HomeScreenInterstitialPinnedFields = "homeScreenInterstitialPinnedFields",
        e.HomeTags = "homeTags",
        e.HomeTips = "homeTips",
        e.HomeVaults = "homeVaults",
        e.HomeWatchtower = "homeWatchtower",
        e.Identity = "identity",
        e.ItemSharing = "itemSharing",
        e.KeyEmpty = "keyEmpty",
        e.KeyError = "keyError",
        e.KeyFilled = "keyFilled",
        e.LabsHero = "labsHero",
        e.Login = "login",
        e.ManageAccountBusiness = "manageAccountBusiness",
        e.ManageAccountData = "manageAccountData",
        e.ManageAccountDevices = "manageAccountDevices",
        e.ManageAccountFamily = "manageAccountFamily",
        e.ManageAccountIndividual = "manageAccountIndividual",
        e.ManageAccountPeople = "manageAccountPeople",
        e.ManageAccountSubscription = "manageAccountSubscription",
        e.ManageAccountVaults = "manageAccountVaults",
        e.ManageAccountTeam = "manageAccountTeam",
        e.MedicalRecord = "medicalRecord",
        e.Membership = "membership",
        e.OperatingSystemAndroid = "operatingSystemAndroid",
        e.OperatingSystemIos = "operatingSystemIos",
        e.OperatingSystemLinux = "operatingSystemLinux",
        e.OperatingSystemMac = "operatingSystemMac",
        e.OperatingSystemOther = "operatingSystemOther",
        e.OperatingSystemWindows = "operatingSystemWindows",
        e.OutdoorLicense = "outdoorLicense",
        e.Passkey = "passkey",
        e.Passport = "passport",
        e.Password = "password",
        e.PinUnlockSettings = "pinUnlockSettings",
        e.PinUnlockWarning = "pinUnlockWarning",
        e.Placeholder = "placeholder",
        e.PrivacyCom = "privacyCom",
        e.Profile = "profile",
        e.RecentlyCreated = "recentlyCreated",
        e.RecentlyDeleted = "recentlyDeleted",
        e.Rewards = "rewards",
        e.Router = "router",
        e.Search = "search",
        e.SecureNote = "secureNote",
        e.Server = "server",
        e.SettingsAbout = "settingsAbout",
        e.SettingsAccounts = "settingsAccounts",
        e.SettingsAdvanced = "settingsAdvanced",
        e.SettingsAppearance = "settingsAppearance",
        e.SettingsAutoFill = "settingsAutoFill",
        e.SettingsBrowser = "settingsBrowser",
        e.SettingsCollections = "settingsCollections",
        e.SettingsDeveloper = "settingsDeveloper",
        e.SettingsGeneral = "settingsGeneral",
        e.SettingsHelp = "settingsHelp",
        e.SettingsLabs = "settingsLabs",
        e.SettingsLabsExperimentFeatureFlags = "settingsLabsExperimentFeatureFlags",
        e.SettingsLabsExperimentNearbyItems = "settingsLabsExperimentNearbyItems",
        e.SettingsLabsExperimentPreferredDetails = "settingsLabsExperimentPreferredDetails",
        e.SettingsNotifications = "settingsNotifications",
        e.SettingsPrivacy = "settingsPrivacy",
        e.SettingsReview = "settingsReview",
        e.SettingsSafariExtension = "settingsSafariExtension",
        e.SettingsSecurity = "settingsSecurity",
        e.SignIn1Password = "signIn1Password",
        e.SignInBannerIllustration = "signInBannerIllustration",
        e.SignInEmergencyKit = "signInEmergencyKit",
        e.SignInGoogle = "signInGoogle",
        e.SignInManual = "signInManual",
        e.SignInOkta = "signInOkta",
        e.SignInPasskey = "signInPasskey",
        e.SignInScanQR = "signInScanQR",
        e.SignInSSO = "signInSSO",
        e.SocialSecurityNumber = "socialSecurityNumber",
        e.SoftwareLicense = "softwareLicense",
        e.Ssh = "ssh",
        e.SsoDeviceIcon = "ssoDeviceIcon",
        e.SsoLoginAmazon = "ssoLoginAmazon",
        e.SsoLoginAmazonAttachment = "ssoLoginAmazonAttachment",
        e.SsoLoginApple = "ssoLoginApple",
        e.SsoLoginAppleAttachment = "ssoLoginAppleAttachment",
        e.SsoLoginFacebook = "ssoLoginFacebook",
        e.SsoLoginFacebookAttachment = "ssoLoginFacebookAttachment",
        e.SsoLoginGitHub = "ssoLoginGitHub",
        e.SsoLoginGitHubAttachment = "ssoLoginGitHubAttachment",
        e.SsoLoginGoogle = "ssoLoginGoogle",
        e.SsoLoginGoogleAttachment = "ssoLoginGoogleAttachment",
        e.SsoLoginMicrosoft = "ssoLoginMicrosoft",
        e.SsoLoginMicrosoftAttachment = "ssoLoginMicrosoftAttachment",
        e.SsoLoginTwitter = "ssoLoginTwitter",
        e.SsoLoginTwitterAttachment = "ssoLoginTwitterAttachment",
        e.SsoLoginOkta = "ssoLoginOkta",
        e.SsoLoginOktaAttachment = "ssoLoginOktaAttachment",
        e.SsoLoginSlack = "ssoLoginSlack",
        e.SsoLoginSlackAttachment = "ssoLoginSlackAttachment",
        e.SsoLoginDiscord = "ssoLoginDiscord",
        e.SsoLoginDiscordAttachment = "ssoLoginDiscordAttachment",
        e.Suggestions = "suggestions",
        e.Tag = "tag",
        e.Tombstone = "tombstone",
        e.TutorialGlobe = "tutorialGlobe",
        e.UnknownCategory = "unknownCategory",
        e.Vault = "vault",
        e.VaultPlaceholder = "vaultPlaceholder",
        e.Watchtower = "watchtower";
    }(ye || (gr.DefaultIconFile = ye = {})),
    function(e) {
        e.AllItems = "allItems",
        e.AppleWatchAdd = "appleWatchAdd",
        e.AppleWatchRemove = "appleWatchRemove",
        e.Archive = "archive",
        e.ArchiveLarge = "archiveLarge",
        e.BiometricUnlockAppleFaceId = "biometricUnlockAppleFaceId",
        e.BiometricUnlockAppleTouchId = "biometricUnlockAppleTouchId",
        e.BiometricUnlockAppleWatch = "biometricUnlockAppleWatch",
        e.BiometricUnlock = "biometricUnlock",
        e.BiometricUnlockFingerprint = "biometricUnlockFingerprint",
        e.BiometricUnlockWindowsHello = "biometricUnlockWindowsHello",
        e.Cancel = "cancel",
        e.CancelOutline = "cancelOutline",
        e.Checkmark = "checkmark",
        e.CheckmarkCircle = "checkmarkCircle",
        e.CheckmarkFilled = "checkmarkFilled",
        e.ChevronDown = "chevronDown",
        e.ChevronLeft = "chevronLeft",
        e.ChevronRight = "chevronRight",
        e.ChevronUp = "chevronUp",
        e.Close = "close",
        e.CollapsedMenu = "collapsedMenu",
        e.Copy = "copy",
        e.CustomizeHome = "customizeHome",
        e.Delete = "delete",
        e.DeleteRow = "deleteRow",
        e.Disclosure = "disclosure",
        e.Document = "document",
        e.DocumentEmpty = "documentEmpty",
        e.Download = "download",
        e.DragHandle = "dragHandle",
        e.Dropdown = "dropdown",
        e.Edit = "edit",
        e.Email = "email",
        e.EmergencyKit = "emergencyKit",
        e.ExternalLink = "externalLink",
        e.FavoriteOff = "favoriteOff",
        e.FavoriteOn = "favoriteOn",
        e.Filter = "filter",
        e.Find = "find",
        e.Folder = "folder",
        e.Frozen = "frozen",
        e.Git = "git",
        e.Help = "help",
        e.HelpBubble = "helpBubble",
        e.Hide = "hide",
        e.Import = "import",
        e.Information = "information",
        e.Integration = "integration",
        e.ItemHistory = "itemHistory",
        e.ItemSharing = "itemSharing",
        e.Ladybug = "ladybug",
        e.LargeType = "largeType",
        e.Link = "link",
        e.Lock = "lock",
        e.Minus = "minus",
        e.Missing = "missing",
        e.Move = "move",
        e.NavigateBack = "navigateBack",
        e.NavigateForward = "navigateForward",
        e.NewWindow = "newWindow",
        e.NoConnection = "noConnection",
        e.NoConnectionLarge = "noConnectionLarge",
        e.NoResults = "noResults",
        e.Notifications = "notifications",
        e.OnePassword = "onePassword",
        e.OnePasswordLocked = "onePasswordLocked",
        e.OpenInBrowser = "openInBrowser",
        e.Overflow = "overflow",
        e.OverflowApple = "overflowApple",
        e.OverflowHorizontal = "overflowHorizontal",
        e.Passkey = "passkey",
        e.Password = "password",
        e.Paste = "paste",
        e.Pin = "pin",
        e.PinUnlock = "pinUnlock",
        e.Plus = "plus",
        e.PlusSmall = "plusSmall",
        e.PreviousSize = "previousSize",
        e.Print = "print",
        e.Unpin = "unpin",
        e.QrCodeScan = "qrCodeScan",
        e.RecentlyDeleted = "recentlyDeleted",
        e.RecentlyDeletedLarge = "recentlyDeletedLarge",
        e.Refresh = "refresh",
        e.Report = "report",
        e.Restore = "restore",
        e.Review = "review",
        e.Search = "search",
        e.Select = "select",
        e.Settings = "settings",
        e.SettingsAdvanced = "settingsAdvanced",
        e.Share = "share",
        e.ShareHistory = "shareHistory",
        e.Show = "show",
        e.Sidebar = "sidebar",
        e.SignIn = "signIn",
        e.Sort = "sort",
        e.Suggestions = "suggestions",
        e.TabBarHome = "tabBarHome",
        e.TabBarItems = "tabBarItems",
        e.TabBarSearch = "tabBarSearch",
        e.TabBarSettings = "tabBarSettings",
        e.TabBarWatchtower = "tabBarWatchtower",
        e.Tags = "tags",
        e.Terminal = "terminal",
        e.Trash = "trash",
        e.TrashLarge = "trashLarge",
        e.TravelMode = "travelMode",
        e.Twitter = "twitter",
        e.UnlockSettingBiometric = "unlockSettingBiometric",
        e.UnlockSettingBiometricAppleFaceId = "unlockSettingBiometricAppleFaceId",
        e.UnlockSettingBiometricAppleFaceIdDisabled = "unlockSettingBiometricAppleFaceIdDisabled",
        e.UnlockSettingBiometricAppleTouchId = "unlockSettingBiometricAppleTouchId",
        e.UnlockSettingBiometricAppleTouchIdDisabled = "unlockSettingBiometricAppleTouchIdDisabled",
        e.UnlockSettingBiometricAppleWatch = "unlockSettingBiometricAppleWatch",
        e.UnlockSettingPassword = "unlockSettingPassword",
        e.UnlockSettingPinUnlock = "unlockSettingPinUnlock",
        e.Upload = "upload",
        e.User = "user",
        e.Users = "users",
        e.UserSmall = "userSmall",
        e.UsersSmall = "usersSmall",
        e.Warning = "warning",
        e.WarningLarge = "warningLarge",
        e.Watchtower = "watchtower",
        e.WatchtowerCompromisedDomain = "watchtowerCompromisedDomain",
        e.WatchtowerExpiring = "watchtowerExpiring",
        e.WatchtowerReusedPassword = "watchtowerReusedPassword",
        e.WatchtowerTwoFactorAvailable = "watchtowerTwoFactorAvailable",
        e.WatchtowerUnsecuredWebsite = "watchtowerUnsecuredWebsite",
        e.WatchtowerVulnerablePassword = "watchtowerVulnerablePassword",
        e.WatchtowerWeakPassword = "watchtowerWeakPassword",
        e.WatchtowerDuplicateItem = "watchtowerDuplicateItem",
        e.WhatsApp = "whatsApp";
    }(fe || (gr.ThemedIconFile = fe = {})),
    function(e) {
        e.RSA = "RSA",
        e.Oct = "oct",
        e.EC = "EC";
    }(ve || (gr.KeyType = ve = {})),
    function(e) {
        e.RSAOAEP = "RSA-OAEP",
        e.RSAOAEP256 = "RSA-OAEP-256",
        e.A256GCM = "A256GCM";
    }(Se || (gr.KeyAlgorithm = Se = {})),
    function(e) {
        e.Sign = "sign",
        e.Verify = "verify",
        e.Encrypt = "encrypt",
        e.Decrypt = "decrypt",
        e.WrapKey = "wrapKey",
        e.UnwrapKey = "unwrapKey",
        e.DeriveKey = "deriveKey",
        e.DeriveBits = "deriveBits";
    }(Ae || (gr.KeyOp = Ae = {})),
    function(e) {
        e.Locked = "Locked",
        e.Unlocked = "Unlocked";
    }(we || (gr.LockState = we = {})),
    function(e) {
        e.General = "general",
        e.Appearance = "appearance",
        e.Security = "security",
        e.Privacy = "privacy",
        e.Browser = "browser",
        e.SafariExtension = "safariExtension",
        e.Notifications = "notifications",
        e.AutoFill = "autoFill",
        e.Advanced = "advanced",
        e.Help = "help",
        e.About1Password = "about1Password",
        e.Review = "review",
        e.Developers = "developers",
        e.ManageAccounts = "manageAccounts",
        e.ManageCollections = "manageCollections",
        e.Labs = "labs",
        e.TelemetryPreferences = "telemetryPreferences";
    }(be || (gr.CategoryId = be = {})),
    function(e) {
        e.Locked = "Locked",
        e.Unlocked = "Unlocked";
    }(Ie || (gr.OpAppLockState = Ie = {})),
    function(e) {
        e.Home = "Home",
        e.Items = "Items",
        e.Search = "Search",
        e.Watchtower = "Watchtower";
    }(Te || (gr.MobileTab = Te = {})),
    function(e) {
        e.ForceStatusUpdate = "forceStatusUpdate",
        e.ResetAllFlags = "resetAllFlags";
    }(Pe || (gr.SyncFlag = Pe = {})),
    function(e) {
        e.Csv = "Csv",
        e.OnePif2 = "OnePif2",
        e.OnePex = "OnePex",
        e.OnePux = "OnePux";
    }(Ce || (gr.Format = Ce = {})),
    function(e) {
        e.Option = "option",
        e.CtrlAlt = "ctrlAlt",
        e.None = "none";
    }(ke || (gr.HoldToRevealMode = ke = {})),
    function(e) {
        e.MainWindow = "mainWindow",
        e.QuickAccess = "quickAccess",
        e.Menu = "menu";
    }(Ee || (gr.TrayAction = Ee = {})),
    function(e) {
        e.Clipboard = "clipboard",
        e.Desktop = "desktop";
    }(Re || (gr.QrCodeSource = Re = {})),
    function(e) {
        e.None = "none",
        e.Info = "info",
        e.Error = "error",
        e.Question = "question",
        e.Warning = "warning";
    }(De || (gr.MessageBoxType = De = {})),
    function(e) {
        e.Active = "A",
        e.Deleted = "D",
        e.Unsupported = "Unsupported";
    }(Fe || (gr.GroupState = Fe = {})),
    function(e) {
        e.Owners = "O",
        e.Administrators = "A",
        e.Recovery = "R",
        e.TeamMembers = "M",
        e.UserDefined = "U",
        e.Unsupported = "Unsupported";
    }(Le || (gr.GroupType = Le = {})),
    function(e) {
        e.PasswordAndSecretKey = "passwordAndSecretKey",
        e.Sso = "sso",
        e.WebAuthn = "webAuthn";
    }(Me || (gr.GuidedExperienceAuthMethod = Me = {})),
    function(e) {
        e.Regular = "R",
        e.Service = "S",
        e.Guest = "G",
        e.Unsupported = "Unsupported";
    }(Ue || (gr.UserType = Ue = {})),
    function(e) {
        e.Add = "add",
        e.Remove = "remove";
    }(Be || (gr.VaultPermissionUpdateType = Be = {})),
    function(e) {
        e.Light = "Light",
        e.Dark = "Dark";
    }(Oe || (gr.ItemCatalogTheme = Oe = {})),
    function(e) {
        e.CryptoCurrency = "cryptoCurrency",
        e.GettingStarted = "gettingStarted",
        e.PopularLogins = "popularLogins",
        e.TravelEssentials = "travelEssentials",
        e.DeveloperTools = "developerTools";
    }(Ne || (gr.HeaderAsset = Ne = {})),
    function(e) {
        e.View = "view",
        e.Edit = "edit",
        e.Manage = "manage";
    }(xe || (gr.VaultSimplifiedPermissions = xe = {})),
    function(e) {
        e.NoViewersRemainingAndUserCanManageVaults = "noViewersRemainingAndUserCanManageVaults",
        e.NoViewersRemainingAndUserCannotManageVaults = "noViewersRemainingAndUserCannotManageVaults",
        e.YouCannotViewAndUserCanManageVaults = "youCannotViewAndUserCanManageVaults",
        e.YouCannotViewAndUserCannotManageVaults = "youCannotViewAndUserCannotManageVaults";
    }(We || (gr.VaultPermissionViewRemoveWarning = We = {})),
    function(e) {
        e.View = "view",
        e.ViewAndEdit = "viewAndEdit",
        e.Manage = "manage",
        e.ManageAndView = "manageAndView",
        e.FullAccess = "fullAccess",
        e.Custom = "custom";
    }(qe || (gr.VaultSimplifiedPermissionsSummary = qe = {})),
    function(e) {
        e.Web = "web",
        e.Email = "email";
    }(Ve || (gr.MdLinkType = Ve = {})),
    function(e) {
        e.Characters = "Characters",
        e.Words = "Words",
        e.Pin = "Pin",
        e.PasswordRules = "PasswordRules";
    }(He || (gr.PasswordType = He = {})),
    function(e) {
        e.Digits = "Digits",
        e.DigitsAndSymbols = "DigitsAndSymbols",
        e.Spaces = "Spaces",
        e.Hyphens = "Hyphens",
        e.Underscores = "Underscores",
        e.Periods = "Periods",
        e.Commas = "Commas";
    }(Ge || (gr.SeparatorType = Ge = {})),
    function(e) {
        e.FullWords = "FullWords",
        e.Syllables = "Syllables",
        e.ThreeLetters = "ThreeLetters";
    }(Ke || (gr.WordListType = Ke = {})),
    function(e) {
        e.Address = "Address",
        e.Email = "Email",
        e.SecretKey = "SecretKey",
        e.Password = "Password";
    }(ze || (gr.SignInTextInputId = ze = {})),
    function(e) {
        e.AppleOtpAuth = "apple-otpauth",
        e.OtpAuth = "otpauth",
        e.Yjotp = "yjotp";
    }(_e || (gr.ValidOtpSchemes = _e = {})),
    function(e) {
        e.AccountSignout = "AccountSignout",
        e.Deletion = "Deletion",
        e.Deauthorization = "Deauthorization",
        e.SsoAccountSignout = "SsoAccountSignout";
    }(je || (gr.OpAppAccountSignOutReason = je = {})),
    function(e) {
        e.Dismiss = "dismiss",
        e.Cancel = "cancel";
    }(Qe || (gr.DismissAction = Qe = {})),
    function(e) {
        e.Set = "Set",
        e.Clear = "Clear",
        e.Mixed = "Mixed";
    }(Ye || (gr.Tristate = Ye = {})),
    function(e) {
        e.New = "New",
        e.Existing = "Existing";
    }($e || (gr.VaultCollectionDetailState = $e = {})),
    function(e) {
        e.RevealSecretKey = "revealSecretKey",
        e.ConcealSecretKey = "concealSecretKey",
        e.CopySignInAddress = "copySignInAddress",
        e.CopyEmail = "copyEmail",
        e.CopySecretKey = "copySecretKey",
        e.CopyLink = "copyLink",
        e.CopySsoProvider = "copySsoProvider",
        e.LargeTypeSignInAddress = "largeTypeSignInAddress",
        e.LargeTypeEmail = "largeTypeEmail",
        e.LargeTypeSecretKey = "largeTypeSecretKey",
        e.LargeTypeSsoProvider = "largeTypeSsoProvider",
        e.ChangeEmail = "changeEmail",
        e.ChangeSecretKey = "changeSecretKey";
    }(Ze || (gr.SignInFieldAction = Ze = {})),
    function(e) {
        e.SetUpAnotherDevice = "setUpAnotherDevice",
        e.ManageAccount = "manageAccount",
        e.CreateVault = "createVault";
    }(Je || (gr.SignInFieldViewContext = Je = {})),
    function(e) {
        e.Transparent = "transparent",
        e.Primary = "primary";
    }(Xe || (gr.CreateButtonStyle = Xe = {})),
    function(e) {
        e.RetainOriginal = "RetainOriginal",
        e.TrashOriginal = "TrashOriginal";
    }(et || (gr.CopyOption = et = {})),
    function(e) {
        e.ShareWithFamily = "ShareWithFamily",
        e.ShareWithTeam = "ShareWithTeam";
    }(tt || (gr.EditItemCreateBannerType = tt = {})),
    function(e) {
        e.ChooseFile = "chooseFile",
        e.ChoosePhoto = "choosePhoto",
        e.RemoveIcon = "removeIcon";
    }(nt || (gr.EditItemIconMenuAction = nt = {})),
    function(e) {
        e.DefaultKeyboard = "DefaultKeyboard",
        e.NumberPad = "NumberPad",
        e.NamePhonePad = "NamePhonePad",
        e.NumbersAndPunctuation = "NumbersAndPunctuation",
        e.EmailAddress = "EmailAddress",
        e.Url = "Url";
    }(rt || (gr.EditItemElementInputKeyboard = rt = {})),
    function(e) {
        e.None = "None",
        e.Words = "Words",
        e.Sentences = "Sentences",
        e.AllCharacters = "AllCharacters";
    }(it || (gr.EditItemElementInputAutoCapitalization = it = {})),
    function(e) {
        e.ChooseFile = "chooseFile",
        e.ChoosePhoto = "choosePhoto",
        e.CapturePhoto = "capturePhoto",
        e.ScanDocument = "scanDocument";
    }(ot || (gr.AddFileSource = ot = {})),
    function(e) {
        e.Default = "Default",
        e.Host = "Host",
        e.Never = "Never";
    }(at || (gr.ItemUrlMode = at = {})),
    function(e) {
        e.Text = "text",
        e.Url = "url",
        e.Email = "email",
        e.Address = "address",
        e.DayMonthYear = "dayMonthYear",
        e.MonthYear = "monthYear",
        e.OneTimePassword = "oneTimePassword",
        e.Password = "password",
        e.Phone = "phone",
        e.SecurityQuestion = "securityQuestion",
        e.File = "file",
        e.SshKey = "sshKey",
        e.SsoLogin = "ssoLogin";
    }(st || (gr.EditItemSaveValueAddFieldType = st = {})),
    function(e) {
        e.Default = "default",
        e.Destructive = "destructive",
        e.Primary = "primary",
        e.Transparent = "transparent";
    }(ct || (gr.EmptyContentButtonStyle = ct = {})),
    function(e) {
        e.Button = "Button",
        e.Link = "Link";
    }(lt || (gr.InAppPurchaseButtonStyle = lt = {})),
    function(e) {
        e.Primary = "Primary",
        e.Secondary = "Secondary",
        e.Tertiary = "Tertiary";
    }(ut || (gr.FieldPriorityOrder = ut = {})),
    function(e) {
        e.Large = "large",
        e.Medium = "medium";
    }(dt || (gr.ItemLocationMessageElementSize = dt = {})),
    function(e) {
        e.Autofill = "autofill",
        e.Download = "download",
        e.Go = "go",
        e.OpenURL = "openURL",
        e.Move = "move",
        e.Copy = "copy",
        e.Archive = "archive",
        e.Restore = "restore",
        e.Export = "export",
        e.Tag = "tag",
        e.Share = "share",
        e.CreatePrivacyCard = "createPrivacyCard",
        e.CreateBrexVendorCard = "createBrexVendorCard";
    }(pt || (gr.ItemAction = pt = {})),
    function(e) {
        e.OneHour = "OneHour",
        e.OneDay = "OneDay",
        e.SevenDays = "SevenDays",
        e.FourteenDays = "FourteenDays",
        e.ThirtyDays = "ThirtyDays";
    }(mt || (gr.ShareItemLinkExpirationMenuEntryId = mt = {})),
    function(e) {
        e.AnyoneWithTheLink = "AnyoneWithTheLink",
        e.OnlySomePeople = "OnlySomePeople";
    }(gt || (gr.ShareItemAvailableToMenuEntryId = gt = {})),
    function(e) {
        e.Modal = "Modal",
        e.ErrorStrip = "ErrorStrip";
    }(ht || (gr.ShareItemErrorFormat = ht = {})),
    function(e) {
        e.Header = "header",
        e.List = "list",
        e.ListFlexible = "listFlexible";
    }(yt || (gr.SidebarElementSpacerType = yt = {})),
    function(e) {
        e.Account = "account",
        e.LockedAccount = "lockedAccount",
        e.VaultCollection = "vaultCollection";
    }(ft || (gr.SbCollectionType = ft = {})),
    function(e) {
        e.CreateCollection = "CreateCollection",
        e.ManageCollections = "ManageCollections",
        e.SetUpAnotherDevice = "SetUpAnotherDevice",
        e.AccountsManagement = "AccountsManagement",
        e.Settings = "Settings",
        e.ScanQrCode = "ScanQrCode";
    }(vt || (gr.SecondaryView = vt = {})),
    function(e) {
        e.ImportantEphemeral = "importantEphemeral",
        e.Persistent = "persistent",
        e.Ephemeral = "ephemeral";
    }(St || (gr.ToastBehavior = St = {})),
    function(e) {
        e.AccountOverview = "accountOverview",
        e.YourDetails = "yourDetails",
        e.People = "people",
        e.TrustedDevices = "trustedDevices",
        e.Telemetry = "telemetry",
        e.SetUpAnotherDevice = "setUpAnotherDevice",
        e.Subscription = "subscription",
        e.EmergencyKit = "emergencyKit",
        e.Vaults = "vaults";
    }(At || (gr.MaCategoryId = At = {})),
    function(e) {
        e.GreyscaleWhite = "greyscaleWhite",
        e.GreyscaleBlack = "greyscaleBlack",
        e.ShadingHeavy = "shadingHeavy",
        e.ShadingExtraFaint = "shadingExtraFaint",
        e.ReadableGreen = "readableGreen",
        e.ReadablePurple = "readablePurple",
        e.ReadableBlue = "readableBlue",
        e.ReadableRed = "readableRed",
        e.TintGreen = "tintGreen",
        e.TintPurple = "tintPurple",
        e.TintBlue = "tintBlue",
        e.TintRed = "tintRed";
    }(wt || (gr.ManageAccountColor = wt = {})),
    function(e) {
        e.Member = "member",
        e.Organizer = "organizer",
        e.Guest = "guest";
    }(bt || (gr.InvitationRole = bt = {})),
    function(e) {
        e.Text = "text",
        e.Numeric = "numeric",
        e.Password = "password";
    }(It || (gr.TextInputFieldType = It = {})),
    function(e) {
        e.CategoryBackground = "categoryBackground",
        e.Invite = "invite";
    }(Tt || (gr.ManageAccountIllustration = Tt = {})),
    function(e) {
        e.TelemetryOptOut = "TelemetryOptOut";
    }(Pt || (gr.ManageAccountTelemetrySettingsOptionId = Pt = {})),
    function(e) {
        e.PrivateVaultRename = "privateVaultRename";
    }(Ct || (gr.AlertBannerType = Ct = {})),
    function(e) {
        e.AttentionSevere = "attentionSevere",
        e.Attention = "attention",
        e.Recommendation = "recommendation";
    }(kt || (gr.CredentialResultStatus = kt = {})),
    function(e) {
        e.ImportView = "importView";
    }(Et || (gr.EssentialSetupImportIllustration = Et = {})),
    function(e) {
        e.AutoFill = "autoFill",
        e.Biometrics = "biometrics",
        e.BiometricsFace = "biometricsFace",
        e.SystemTray = "systemTray",
        e.BrowserExtension = "browserExtension",
        e.Telemetry = "telemetry";
    }(Rt || (gr.EssentialSetupFeatureIllustration = Rt = {})),
    function(e) {
        e.AutoFill = "AutoFill",
        e.Biometrics = "Biometrics",
        e.BrowserExtension = "BrowserExtension",
        e.SystemTray = "SystemTray",
        e.WhatsNew = "WhatsNew",
        e.Import = "Import",
        e.Telemetry = "Telemetry",
        e.PrivateVaultRename = "PrivateVaultRename";
    }(Dt || (gr.EssentialSetupPageId = Dt = {})),
    function(e) {
        e.Strong = "strong",
        e.Moderate = "moderate";
    }(Ft || (gr.EssentialSetupPageNavigationButtonEmphasis = Ft = {})),
    function(e) {
        e.Success = "success";
    }(Lt || (gr.EssentialSetupIllustration = Lt = {})),
    function(e) {
        e.Redesign = "redesign";
    }(Mt || (gr.EssentialSetupWhatsNewHeroIllustration = Mt = {})),
    function(e) {
        e.Finished = "Finished",
        e.Running = "Running",
        e.Failed = "Failed";
    }(Ut || (gr.Status = Ut = {})),
    function(e) {
        e.Locked = "locked",
        e.Unlocked = "unlocked",
        e.FailedToUnlock = "failedToUnlock";
    }(Bt || (gr.LockScreenAccountPreviewMode = Bt = {})),
    function(e) {
        e.Primary = "primary",
        e.ItemDetails = "itemDetails",
        e.Settings = "settings",
        e.QuickAccess = "quickAccess",
        e.AuthPrompt = "authPrompt",
        e.LargeType = "largeType",
        e.KeyboardShortcutsQX = "keyboardShortcutsQX",
        e.AutofillAccessibility = "autofillAccessibility",
        e.None = "none";
    }(Ot || (gr.WindowType = Ot = {})),
    function(e) {
        e.ToggleFullScreen = "toggleFullScreen",
        e.Services = "services",
        e.Hide = "hide",
        e.HideOthers = "hideOthers",
        e.Unhide = "unhide",
        e.ToggleDevTools = "toggleDevTools",
        e.Undo = "undo",
        e.Redo = "redo",
        e.Cut = "cut",
        e.Copy = "copy",
        e.SelectAll = "selectAll",
        e.Close = "close",
        e.Minimize = "minimize",
        e.Zoom = "zoom",
        e.Front = "front",
        e.Paste = "paste",
        e.Reload = "reload",
        e.StartSpeaking = "startSpeaking",
        e.StopSpeaking = "stopSpeaking",
        e.Help = "help",
        e.Window = "window",
        e.EditMenu = "editMenu";
    }(Nt || (gr.Roles = Nt = {})),
    function(e) {
        e.SyncAll = "syncAll";
    }(xt || (gr.OfflineIndicatorAction = xt = {})),
    function(e) {
        e.AutofillShortcut = "autofillShortcut",
        e.QuickAccessShortcut = "quickAccessShortcut";
    }(Wt || (gr.QuickAccessOpenedBy = Wt = {})),
    function(e) {
        e.AutofillRequestAccessibilityPermissions = "AutofillRequestAccessibilityPermissions";
    }(qt || (gr.QXOnboardingAction = qt = {})),
    function(e) {
        e.Increment = "increment",
        e.Decrement = "decrement",
        e.Reset = "reset";
    }(Vt || (gr.StepperChangeType = Vt = {})),
    function(e) {
        e.Green = "green",
        e.Grey = "grey",
        e.Red = "red",
        e.Purple = "purple";
    }(Ht || (gr.IndicatorPillColor = Ht = {})),
    function(e) {
        e.InterfaceDensityCompact = "interfaceDensityCompact",
        e.InterfaceDensityComfortable = "interfaceDensityComfortable";
    }(Gt || (gr.SettingsElementRadioOptionIllustration = Gt = {})),
    function(e) {
        e.Leading = "leading",
        e.Centered = "centered",
        e.Trailing = "trailing";
    }(Kt || (gr.TextJustification = Kt = {})),
    function(e) {
        e.SecretKey = "secretKey",
        e.Sso = "sso",
        e.Passkey = "passkey";
    }(zt || (gr.ManualSignInFormType = zt = {})),
    function(e) {
        e.Primary = "primary",
        e.PrimaryOutline = "primaryOutline",
        e.DangerOutline = "dangerOutline",
        e.Grey = "grey",
        e.Invisible = "invisible";
    }(_t || (gr.SignInButtonStyle = _t = {})),
    function(e) {
        e.SlideOne = "SlideOne",
        e.SlideTwo = "SlideTwo",
        e.SlideThree = "SlideThree",
        e.SlideFour = "SlideFour",
        e.SlideFive = "SlideFive";
    }(jt || (gr.WelcomeScreenSlideID = jt = {})),
    function(e) {
        e.Leftward = "leftward",
        e.Rightward = "rightward";
    }(Qt || (gr.CancelButtonStyle = Qt = {})),
    function(e) {
        e.Back = "back",
        e.Import = "import";
    }(Yt || (gr.EmergencyKitSignInButtonAction = Yt = {})),
    function(e) {
        e.SignIn = "signIn",
        e.CheckAccount = "checkAccount";
    }($t || (gr.ManualSignInSubmitAction = $t = {})),
    function(e) {
        e.AccountList = "accountList",
        e.Unlock = "unlock",
        e.AuthPrompt = "authPrompt";
    }(Zt || (gr.SignInResponseContext = Zt = {})),
    function(e) {
        e.InvalidRequest = "InvalidRequest",
        e.UnAuthorizedClient = "UnAuthorizedClient",
        e.AccessDenied = "AccessDenied",
        e.UnSupportedResponseType = "UnSupportedResponseType",
        e.InvalidScope = "InvalidScope",
        e.ServerError = "ServerError",
        e.TemporarilyUnavailable = "TemporarilyUnavailable",
        e.Unknown = "Unknown";
    }(Jt || (gr.OAuthRejectedError = Jt = {})),
    function(e) {
        e.CompromisedLogins = "compromisedLogins",
        e.VulnerablePasswords = "vulnerablePasswords",
        e.WeakPasswords = "weakPasswords",
        e.UnsecuredUrl = "unsecuredUrl",
        e.DuplicatePassword = "duplicatePassword",
        e.TwoFactorAvailable = "twoFactorAvailable",
        e.PasskeyAvailable = "passkeyAvailable",
        e.Expiring = "expiring",
        e.LastpassImpacted = "lastpassImpacted",
        e.WrongAccount = "wrongAccount",
        e.DuplicateItem = "duplicateItem",
        e.DeveloperWatchtower = "developerWatchtower";
    }(Xt || (gr.WatchtowerCardType = Xt = {})),
    function(e) {
        e.Shipping = "shipping",
        e.Billing = "billing";
    }(en || (gr.AddressType = en = {})),
    function(e) {
        e.InvalidSession = "InvalidSession",
        e.SessionLocked = "SessionLocked",
        e.NakedDomainFailed = "NakedDomainFailed",
        e.InvalidItemTemplate = "InvalidItemTemplate",
        e.BrainSaveObject = "BrainSaveObject",
        e.InvalidSaveRequest = "InvalidSaveRequest",
        e.VaultSelectorNotConfigured = "VaultSelectorNotConfigured";
    }(tn || (gr.SaveManagerError = tn = {})),
    function(e) {
        e.ReachedLimitingCondition = "ReachedLimitingCondition",
        e.NoSession = "NoSession",
        e.InvalidTabOrUrl = "InvalidTabOrUrl",
        e.InvalidItem = "InvalidItem",
        e.MismatchingUuid = "MismatchingUuid",
        e.FillFailed = "FillFailed";
    }(nn || (gr.FillStatusError = nn = {})),
    function(e) {
        e.InvalidRequest = "InvalidRequest",
        e.MissingAccountInformation = "MissingAccountInformation",
        e.MissingUnlockInformationInKeychain = "MissingUnlockInformationInKeychain",
        e.MissingDSecret = "MissingDSecret",
        e.CannotUnlockAccounts = "CannotUnlockAccounts",
        e.CannotEncodeResponse = "CannotEncodeResponse",
        e.Unknown = "Unknown";
    }(rn || (gr.OpiRequestError = rn = {})),
    function(e) {
        e.NoAppStoreProvided = "noAppStoreProvided",
        e.CannotMakePayment = "cannotMakePayment",
        e.PurchaseFailed = "purchaseFailed",
        e.ProductNotFound = "productNotFound",
        e.CannotDecodeProductIdentifier = "cannotDecodeProductIdentifier",
        e.NoAppStoreResult = "noAppStoreResult",
        e.FailedToDeserializeResponse = "failedToDeserializeResponse",
        e.ExistingPurchaseInProgress = "existingPurchaseInProgress",
        e.UnsupportedPlatform = "unsupportedPlatform";
    }(on || (gr.AppStoreError = on = {})),
    function(e) {
        e.AuthenticationSuccessful = "AuthenticationSuccessful",
        e.AuthenticationFailed = "AuthenticationFailed",
        e.UserCancel = "UserCancel",
        e.UserFallBack = "UserFallBack",
        e.SystemCancel = "SystemCancel",
        e.PasscodeNotSet = "PasscodeNotSet",
        e.BiometryNotAvailable = "BiometryNotAvailable",
        e.BiometryNotEnrolled = "BiometryNotEnrolled",
        e.BiometryLockout = "BiometryLockout",
        e.AppCancel = "AppCancel",
        e.InvalidContext = "InvalidContext",
        e.NotInteractive = "NotInteractive",
        e.WatchNotAvailable = "WatchNotAvailable",
        e.LocalizedStringsFailure = "LocalizedStringsFailure",
        e.FailureReasonUnknown = "FailureReasonUnknown",
        e.Timeout = "Timeout",
        e.BiometryAlreadyInProgress = "BiometryAlreadyInProgress";
    }(an || (gr.BiometricAuthResponse = an = {})),
    function(e) {
        e.InvalidBrowserSignature = "InvalidBrowserSignature",
        e.UnsupportedBrowser = "UnsupportedBrowser",
        e.DoesNotMatchTeam = "DoesNotMatchTeam",
        e.NotSigned = "NotSigned",
        e.MissingRequirementInfo = "MissingRequirementInfo";
    }(sn || (gr.CodeSignatureError = sn = {})),
    function(e) {
        e.CleanUp = "CleanUp",
        e.ConnectionInterrupted = "ConnectionInterrupted",
        e.ConnectionInvalidated = "ConnectionInvalidated",
        e.ConnectionTimeout = "ConnectionTimeout",
        e.ContextDropped = "ContextDropped";
    }(cn || (gr.XpcDisconnectReason = cn = {})),
    function(e) {
        e.Uppercase = "uppercase",
        e.Lowercase = "lowercase";
    }(ln || (gr.PeriodDisplay = ln = {})),
    function(e) {
        e.Decimal = "decimal",
        e.PaddedDecimal = "paddedDecimal",
        e.Abbreviated = "abbreviated",
        e.Full = "full",
        e.Narrow = "narrow";
    }(un || (gr.MonthDayDisplay = un = {})),
    function(e) {
        e.Error = "Error",
        e.Warn = "Warn",
        e.Info = "Info",
        e.Debug = "Debug",
        e.Trace = "Trace";
    }(dn || (gr.Level = dn = {})),
    function(e) {
        e.NotDetermined = "notDetermined",
        e.Denied = "denied",
        e.Authorized = "authorized",
        e.Provisional = "provisional",
        e.Ephemeral = "ephemeral",
        e.Unknown = "unknown";
    }(pn || (gr.AppleNotificationAuthorizationStatusResponse = pn = {})),
    function(e) {
        e.Granted = "granted",
        e.NotGranted = "notGranted";
    }(mn || (gr.AppleNotificationAuthorizationResponse = mn = {})),
    function(e) {
        e.None = "None",
        e.Biometry = "Biometry",
        e.DeviceCredential = "DeviceCredential";
    }(gn || (gr.BiometricUnlock = gn = {})),
    function(e) {
        e.Interrupted = "Interrupted",
        e.NoCredential = "NoCredential",
        e.UserCanceled = "UserCanceled",
        e.Unknown = "Unknown",
        e.UnexpectedCredentialType = "UnexpectedCredentialType",
        e.ApplicationError = "ApplicationError";
    }(hn || (gr.AndroidWebAuthnError = hn = {})),
    function(e) {
        e.UnverifiedUser = "UnverifiedUser",
        e.AddressInUse = "AddressInUse",
        e.RateLimit = "RateLimit",
        e.OverQuota = "OverQuota",
        e.RequestError = "RequestError",
        e.InternalError = "InternalError";
    }(yn || (gr.AliasError = yn = {})),
    function(e) {
        e.Fastmail = "fastmail";
    }(fn || (gr.EmailAliasProvider = fn = {})),
    function(e) {
        e.Default = "default",
        e.Privacy = "privacy",
        e.Ramp = "ramp",
        e.Stripe = "stripe";
    }(vn || (gr.ServiceIntegration = vn = {})),
    function(e) {
        e.Private = "Private",
        e.Others = "Others",
        e.Everyone = "Everyone";
    }(Sn || (gr.VaultItemViewability = Sn = {})),
    function(e) {
        e.UserSuspended = "userSuspended",
        e.Other = "other";
    }(An || (gr.NmRequestDelegatedSessionError = An = {})),
    function(e) {
        e.Ok = "ok",
        e.Dismissed = "dismissed",
        e.Timeout = "timeout",
        e.AccountLocked = "accountLocked",
        e.AccountNotFound = "accountNotFound",
        e.UnsupportedClientType = "unsupportedClientType",
        e.PasswordUnlockRequired = "passwordUnlockRequired",
        e.AppMustBeLockedToContinue = "appMustBeLockedToContinue",
        e.SystemAuthDisabled = "systemAuthDisabled",
        e.NotAvailable = "notAvailable",
        e.ClientOutOfDate = "clientOutOfDate",
        e.PromptError = "promptError";
    }(wn || (gr.NmAuthorizationResponse = wn = {})),
    function(e) {
        e.Working = "working",
        e.PermissionErrors = "permissionErrors",
        e.ValidationErrors = "validationErrors",
        e.SynchronizationErrors = "synchronizationErrors",
        e.IncompatibleSandbox = "incompatibleSandbox",
        e.UnableToConnect = "unableToConnect";
    }(bn || (gr.NmCurrentStatusRequest = bn = {})),
    function(e) {
        e.BrowserSignatureInvalid = "BrowserSignatureInvalid",
        e.UnknownBrowser = "UnknownBrowser";
    }(In || (gr.BrowserVerificationFailedReason = In = {})),
    function(e) {
        e.MainAppNotRunning = "MainAppNotRunning",
        e.MainAppOpenTimeout = "MainAppOpenTimeout",
        e.CannotOpenMainApp = "CannotOpenMainApp",
        e.UnknownInvocation = "UnknownInvocation",
        e.BrowserHelperNotRegistered = "BrowserHelperNotRegistered";
    }(Tn || (gr.BrowserSupportResponse = Tn = {})),
    function(e) {
        e.MainAppNotRunning = "MainAppNotRunning";
    }(Pn || (gr.BrowserHelperResponse = Pn = {})),
    function(e) {
        e.Install = "Install",
        e.Uninstall = "Uninstall";
    }(Cn || (gr.OpAppBrowserSupportSetup = Cn = {})),
    function(e) {
        e.Accepted = "Accepted",
        e.UserFallBack = "UserFallBack",
        e.Cancelled = "Cancelled",
        e.Denied = "Denied",
        e.NotEnabled = "NotEnabled";
    }(kn || (gr.SystemUnlockResponse = kn = {})),
    function(e) {
        e.UnableToFindDevice = "UnableToFindDevice",
        e.NoStoredDSecret = "NoStoredDSecret";
    }(En || (gr.ErrorRequestingDSecretProxy = En = {})),
    function(e) {
        e.Cli = "Cli",
        e.Ssh = "Ssh";
    }(Rn || (gr.AuthPromptType = Rn = {})),
    function(e) {
        e.FailedMfaPrompt = "FailedMfaPrompt",
        e.InvalidMfaPromptResponse = "InvalidMfaPromptResponse",
        e.NoMfaOptions = "NoMfaOptions",
        e.MfaTimedOut = "MfaTimedOut";
    }(Dn || (gr.Error = Dn = {})),
    function(e) {
        e.Group = "group",
        e.User = "user";
    }(Fn || (gr.AccessorType = Fn = {})),
    function(e) {
        e.ConnectionFailed = "connectionFailed",
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked",
        e.UserGuest = "userGuest",
        e.UserSuspended = "userSuspended",
        e.FilterVaultNotFound = "filterVaultNotFound",
        e.ServerRequestFailed = "serverRequestFailed";
    }(Ln || (gr.ApiGetGroupsError = Ln = {})),
    function(e) {
        e.ConnectionFailed = "connectionFailed",
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked",
        e.UserGuest = "userGuest",
        e.UserSuspended = "userSuspended",
        e.FilterVaultNotFound = "filterVaultNotFound",
        e.ServerRequestFailed = "serverRequestFailed";
    }(Mn || (gr.ApiGetUsersError = Mn = {})),
    function(e) {
        e.ConnectionFailed = "connectionFailed",
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked",
        e.AccountFrozen = "accountFrozen",
        e.AccountNotFamily = "accountNotFamily",
        e.UserGuest = "userGuest",
        e.UserSuspended = "userSuspended",
        e.VaultNotFound = "vaultNotFound",
        e.VaultAccessCannotBeManaged = "vaultAccessCannotBeManaged",
        e.PermissionMissingManage = "permissionMissingManage",
        e.Internal = "internal";
    }(Un || (gr.ApiManageVaultAccessError = Un = {})),
    function(e) {
        e.CannotRemoveReadWithoutManage = "cannotRemoveReadWithoutManage";
    }(Bn || (gr.ApiValidateVaultPermissionsChangeError = Bn = {})),
    function(e) {
        e.GenericInvalid = "genericInvalid";
    }(On || (gr.ApiValidateEmailError = On = {})),
    function(e) {
        e.GenericInvalid = "genericInvalid";
    }(Nn || (gr.ApiValidateSecretKeyError = Nn = {})),
    function(e) {
        e.GenericInvalid = "genericInvalid";
    }(xn || (gr.ApiValidateSignInAddressError = xn = {})),
    function(e) {
        e.Simplified = "simplified";
    }(Wn || (gr.VaultPermissionsMethod = Wn = {})),
    function(e) {
        e.CannotRemoveReadWithoutManage = "cannotRemoveReadWithoutManage";
    }(qn || (gr.VaultPermissionsCannotModifyReason = qn = {})),
    function(e) {
        e.Failed = "failed";
    }(Vn || (gr.MdError = Vn = {})),
    function(e) {
        e.Failed = "failed";
    }(Hn || (gr.WebMdError = Hn = {})),
    function(e) {
        e.All = "All",
        e.Locked = "Locked",
        e.Unlocked = "Unlocked";
    }(Gn || (gr.AccountLockState = Gn = {})),
    function(e) {
        e.ShowAddAccount = "ShowAddAccount";
    }(Kn || (gr.FrontendAction = Kn = {})),
    function(e) {
        e.SignUp = "signUp",
        e.LinkExisting = "linkExisting";
    }(zn || (gr.FreeFamilyOption = zn = {})),
    function(e) {
        e.Android = "Android",
        e.Apple = "Apple",
        e.Mac = "Mac",
        e.MacSystemPassword = "MacSystemPassword";
    }(_n || (gr.ApiType = _n = {})),
    function(e) {
        e.Login = "login",
        e.Password = "password",
        e.CreditCard = "creditCard",
        e.Identity = "identity",
        e.Router = "router";
    }(jn || (gr.AutoFillItemType = jn = {})),
    function(e) {
        e.Initialization = "initialization",
        e.Create = "create",
        e.Edit = "edit",
        e.Delete = "delete";
    }(Qn || (gr.VaultError = Qn = {})),
    function(e) {
        e.InputJsonDeserializationFailed = "InputJsonDeserializationFailed",
        e.MissingTemplateUuid = "MissingTemplateUuid",
        e.MissingItemUrl = "MissingItemUrl",
        e.BadVersionInt = "BadVersionInt";
    }(Yn || (gr.ItemListEntryError = Yn = {})),
    function(e) {
        e.Compromised = "compromised",
        e.Vulnerable = "vulnerable",
        e.ReusedPassword = "reusedPassword",
        e.WeakPassword = "weakPassword",
        e.Unsecured = "unsecured",
        e.InactiveTwoFactor = "inactiveTwoFactor",
        e.PasskeyAvailable = "passkeyAvailable",
        e.Expiring = "expiring",
        e.Lastpass = "lastpass",
        e.WrongAccount = "wrongAccount",
        e.DuplicateItem = "duplicateItem";
    }($n || (gr.WatchtowerExclusionType = $n = {})),
    function(e) {
        e.Success = "success",
        e.Error = "error";
    }(Zn || (gr.WebAuthnSignUpAddAccountResponse = Zn = {})),
    function(e) {
        e.QuickAccess = "quickAccess",
        e.SsoAuthPrompt = "ssoAuthPrompt";
    }(Jn || (gr.WindowFocusPurpose = Jn = {})),
    function(e) {
        e.Create = "webauthn.create",
        e.Get = "webauthn.get",
        e.PaymentGet = "payment.get";
    }(Xn || (gr.ClientDataType = Xn = {})),
    function(e) {
        e.AccountNotFound = "accountNotFound",
        e.FeatureDisabled = "featureDisabled",
        e.AccountTypeNotSupported = "accountTypeNotSupported";
    }(er || (gr.ManageAccountResponseError = er = {})),
    function(e) {
        e.Success = "success",
        e.Failed = "failed";
    }(tr || (gr.CancelInviteResponse = tr = {})),
    function(e) {
        e.Success = "success",
        e.Failed = "failed";
    }(nr || (gr.ResendInviteResponse = nr = {})),
    function(e) {
        e.Success = "success",
        e.Failed = "failed";
    }(rr || (gr.ConfirmUserResponse = rr = {})),
    function(e) {
        e.NetworkError = "networkError",
        e.PermissionDenied = "permissionDenied";
    }(ir || (gr.ManageAccountUserVaultsListResponseError = ir = {})),
    function(e) {
        e.Member = "member",
        e.Admin = "admin",
        e.Owner = "owner";
    }(or || (gr.ManageAccountUserType = or = {})),
    function(e) {
        e.PrivateVaultRename = "privateVaultRename";
    }(ar || (gr.AlertBannerDialog = ar = {})),
    function(e) {
        e.Pages = "pages",
        e.Signin = "signin",
        e.Unlock = "unlock";
    }(sr || (gr.EssentialSetupRequest = sr = {})),
    function(e) {
        e.Code = "Code",
        e.Yubikey = "Yubikey";
    }(cr || (gr.MfaInProgressKind = cr = {})),
    function(e) {
        e.Home = "home",
        e.Items = "items",
        e.Sidebar = "sidebar";
    }(lr || (gr.MobileHomeScreenType = lr = {})),
    function(e) {
        e.Compromised = "Compromised",
        e.Vulnerable = "Vulnerable",
        e.Reused = "Reused",
        e.Weak = "Weak",
        e.Unsecured = "Unsecured",
        e.InactiveMfa = "InactiveMfa",
        e.PasskeyAvailable = "PasskeyAvailable",
        e.Expiring = "Expiring",
        e.PasswordStrength = "PasswordStrength",
        e.Ignored = "Ignored",
        e.LastpassImpacted = "LastpassImpacted",
        e.WrongAccount = "WrongAccount",
        e.DuplicateItem = "DuplicateItem";
    }(ur || (gr.ItemListWatchtower = ur = {})),
    function(e) {
        e.Warning = "warning",
        e.Info = "info";
    }(dr || (gr.SettingsCalloutVariant = dr = {})),
    function(e) {
        e.UseMaps = "useMaps",
        e.LabsNearbyItems = "labsNearbyItems";
    }(pr || (gr.CheckboxSetting = pr = {})),
    function(e) {
        e.Visa = "Visa",
        e.Mastercard = "Mastercard",
        e.AmericanExpress = "AmericanExpress",
        e.Discover = "Discover",
        e.Jcb = "Jcb",
        e.Maestro = "Maestro",
        e.VisaElectron = "VisaElectron",
        e.UnionPay = "UnionPay";
    }(mr || (gr.CcType = mr = {}));
    const hr = ()=>function() {
        if ("undefined" != typeof window)
            return window;
        if ("undefined" != typeof globalThis)
            return globalThis;
        throw new Error("unable to locate global object")
    }().crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
    class yr {
        constructor(e="") {
            this.log = (e,...t)=>{
                this.isPermitted() && this.message(e);
            }
            ,
            this.debug = (e,...t)=>{
                this.isPermitted() && this.message(e);
            }
            ,
            this.info = (e,...t)=>{
                this.isPermitted() && console.info(this.message(e), ...t);
            }
            ,
            this.warn = (e,...t)=>{
                this.isPermitted() && console.warn(this.message(e), ...t);
            }
            ,
            this.error = (e,...t)=>{
                this.isPermitted() && console.error(this.message(e), ...t);
            }
            ,
            this.isPermitted = ()=>!1,
            this.message = e=>this._prependMessage ? `${this._prependMessage}: ${e}` : e,
            this._prependMessage = e;
        }
    }
    class fr {
        constructor() {
            this.request = e=>new Promise(((t,n)=>{
                chrome.runtime.sendMessage(e, (r=>{
                    "Success" === r.type ? t(r.data) : n(new Error(`Error response received for message <${e.name}>`));
                }
                ));
            }
            )),
            this.on = (e,t)=>{
                function n(n, r, i) {
                    if (n.name && n.name === e) {
                        const e = new yr("WebExtListener handler registration");
                        return new Promise((e=>e(t(n.data)))).then(i).catch((t=>{
                            console.warn(`Caught error handling <${n.name}> message`),
                            e.error(t);
                        }
                        )),
                        !0
                    }
                    return !1
                }
                return chrome.runtime.onMessage.addListener(n),
                n
            }
            ,
            this.off = (e,t)=>{
                chrome.runtime.onMessage.removeListener(t);
            }
            ;
        }
    }
    class vr {
        constructor() {
            this.uuid = hr(),
            this.callbacks = {},
            this.request = e=>new Promise((t=>{
                const n = vr.generateId();
                this.callbacks[n] = t,
                this._sendMessage(Object.assign({
                    callbackId: n
                }, e));
            }
            )),
            this.on = (e,t)=>this._register((n=>{
                n.name && n.name === e && Promise.resolve(t(n.data)).then((e=>{
                    this._sendMessage(Object.assign(Object.assign({}, n), {
                        data: e
                    }));
                }
                ));
            }
            )),
            this.off = (e,t)=>{
                this._deregister(e, t);
            }
            ,
            this.listenForResponses = ()=>{
                this._register((e=>{
                    "callbackId"in e && e.callbackId in this.callbacks && (this.callbacks[e.callbackId](e.data),
                    delete this.callbacks[e.callbackId]);
                }
                ));
            }
            ,
            this._sendMessage.bind(this),
            this._register.bind(this),
            this._deregister.bind(this),
            this.listenForResponses();
        }
    }
    vr.generateId = ()=>window.crypto.getRandomValues(new Uint32Array(1))[0];
    class Sr extends vr {
        _sendMessage(e) {}
        _register(e) {
            var t;
            function n(e) {
                e.data.outgoing;
            }
            return null === (t = window.top) || void 0 === t || t.addEventListener("message", n),
            n
        }
        _deregister(e, t) {}
    }
    class Ar extends vr {
        static isSafariAppExtension() {
            return "undefined" != typeof safari && void 0 !== safari.extension
        }
        _sendMessage(e) {
            const t = {
                callbackId: e.callbackId,
                uuid: this.uuid,
                outgoing: !0,
                frameOrigin: window.location.origin,
                message: {
                    name: e.name,
                    data: e.data
                }
            };
            safari.extension.dispatchMessage("message", t);
        }
        _register(e) {
            const t = this.uuid;
            function n(n) {
                const r = n.message;
                !r || r.uuid && r.uuid !== t || e({
                    callbackId: r.callbackId,
                    name: r.message.name,
                    data: r.message.data
                });
            }
            return safari.self.addEventListener("message", n),
            n
        }
        _deregister(e, t) {
            safari.self.removeEventListener("message", t);
        }
    }
    function wr(e, t={
        targetParent: !1
    }) {
        return {
            name: "relay-message-to-frames",
            data: {
                message: JSON.stringify(e),
                targetParent: t.targetParent
            }
        }
    }
    const br = new class {
        constructor(e) {
            this.transport = e;
        }
        sayHello() {
            return this.transport.request({
                name: "hello",
                data: void 0
            })
        }
        analyzeFrame(e) {
            return this.transport.request({
                name: "analyze-frame",
                data: e
            })
        }
        heartbeat() {
            return this.transport.request({
                name: "frame-manager-heartbeat"
            })
        }
        refreshCanRequestUnlock() {
            return this.transport.request({
                name: "refresh-can-request-unlock",
                data: void 0
            })
        }
        getFrameManagerConfiguration() {
            return this.transport.request({
                name: "get-frame-manager-configuration",
                data: void 0
            })
        }
        filterInlineMenu(e) {
            return this.transport.request(wr({
                name: "filter-inline-menu",
                data: e
            }))
        }
        focusInlineMenu() {
            return this.transport.request(wr({
                name: "focus-inline-menu"
            }))
        }
        requestManagedUnlock() {
            return this.transport.request({
                name: "request-managed-unlock",
                data: void 0
            })
        }
        getSaveObjectPublicKey() {
            return this.transport.request({
                name: "get-save-object-public-key",
                data: void 0
            })
        }
        handleSaveItemRequest(e, t, n) {
            this.transport.request({
                name: "add-save-object",
                data: {
                    type: e,
                    data: t,
                    encrypted: n
                }
            });
        }
        addScrollAndResizeEventListeners() {
            return this.transport.request(wr({
                name: "add-scroll-and-resize-event-listeners"
            }, {
                targetParent: !0
            }))
        }
        removeScrollAndResizeEventListeners() {
            return this.transport.request(wr({
                name: "remove-scroll-and-resize-event-listeners"
            }))
        }
        clearFillSession() {
            return this.transport.request({
                name: "clear-fill-session"
            })
        }
        resolvePendingFill() {
            return this.transport.request({
                name: "resolve-pending-fill",
                data: void 0
            })
        }
        onHostAppRestarted(e) {
            this.transport.on("host-app-restarted", e);
        }
        onShellPluginsUrlDetected(e) {
            this.transport.on("shell-plugins-url-detected", e);
        }
        onCanRequestUnlockChanged(e) {
            this.transport.on("can-request-unlock-changed", e);
        }
        onCollectFrameDetails(e) {
            this.transport.on("collect-frame-details", e);
        }
        onUsoCollectProviders(e) {
            this.transport.on("uso-collect-providers", e);
        }
        onUsoClickProviderButton(e) {
            this.transport.on("uso-click-provider-button", e);
        }
        onUsoDevtoolsRunButtonDetection(e) {
            return this.transport.on("uso-devtools-run-button-detection", e)
        }
        onUsoDevtoolsDebugButtonDetection(e) {
            return this.transport.on("uso-devtools-button-detection-debug", e)
        }
        onUsoDevtoolsHighlightButtons(e) {
            return this.transport.on("uso-devtools-highlight-buttons", e)
        }
        usoProviderDetected(e) {
            return this.transport.request({
                name: "uso-collect-buttons",
                data: e
            })
        }
        usoDevtoolsDisplayButtonsData(e) {
            return this.transport.request({
                name: "uso-devtools-display-buttons-data",
                data: e
            })
        }
        setUsoContextAccount(e) {
            return this.transport.request({
                name: "uso-context-account",
                data: e
            })
        }
        onPerformFill(t) {
            this.transport.on("perform-fill", (({payload: n, authorizedUnsafeHttp: r})=>{
                let i;
                i = "response"in n && "status"in n ? n : {
                    response: n,
                    status: e.None
                },
                t(i, r);
            }
            ));
        }
        editedStateChanged(e, t) {
            return this.transport.request(wr({
                name: "edited-state-changed",
                data: {
                    formEdited: e,
                    fieldEdited: t
                }
            }))
        }
        onLockStateChanged(e) {
            this.transport.on("lock-state-changed", e);
        }
        onBlurActiveField(e) {
            this.transport.on("blur-active-field", e);
        }
        onFocusPage(e) {
            this.transport.on("focus-page", e);
        }
        onPing(e) {
            this.transport.on("ping", e);
        }
        onFrozenAccountInfoChanged(e) {
            this.transport.on("frozen-accounts-changed", e);
        }
        onAddScrollAndResizeEventListeners(e) {
            this.transport.on("add-scroll-and-resize-event-listeners", e);
        }
        onRemoveScrollAndResizeEventListeners(e) {
            this.transport.on("remove-scroll-and-resize-event-listeners", e);
        }
        onForwardInlineMenuPosition(e) {
            this.transport.on("forward-inline-menu-position", e);
        }
        onGetFrameOrigin(e) {
            this.transport.on("get-frame-origin", e);
        }
        sendFrameOrigin(e) {
            this.transport.request({
                name: "provide-frame-origin",
                data: {
                    uuid: e
                }
            });
        }
        autosaveCapture(e) {
            this.transport.request({
                name: "autosave-capture",
                data: e
            });
        }
        autosaveNotifyCapture() {
            this.transport.request(wr({
                name: "autosave-notify-capture"
            }));
        }
        autosaveSubmission() {
            this.transport.request({
                name: "autosave-submission"
            });
        }
        onAutosaveNotifyCapture(e) {
            this.transport.on("autosave-notify-capture", e);
        }
        onForwardActiveFieldDetails(e) {
            this.transport.on("forward-active-field-details", e);
        }
        onInlineButtonPressed(e) {
            this.transport.on("inline-button-pressed", e);
        }
        pageReady() {
            return this.transport.request({
                name: "page-ready",
                data: void 0
            })
        }
        sendInlineMenuOpened() {
            return this.transport.request(wr({
                name: "inline-menu-opened"
            }))
        }
        sendInlineMenuClosed() {
            return this.transport.request(wr({
                name: "inline-menu-closed"
            }))
        }
        sendVerificationToken(e) {
            return this.transport.request(wr({
                name: "verification-token",
                data: e
            }))
        }
        onRequestVerificationToken(e) {
            this.transport.on("request-verification-token", e);
        }
        onResizeInlineMenu(e) {
            this.transport.on("resize-inline-menu", e);
        }
        onItemDetailValueDragStart(e) {
            this.transport.on("item-detail-value-drag-start", e);
        }
        onItemDetailValueDragEnd(e) {
            this.transport.on("item-detail-value-drag-end", e);
        }
        onRemoveInlineMenu(e) {
            this.transport.on("remove-inline-menu", e);
        }
        onFocusInlineMenuFrame(e) {
            this.transport.on("focus-inline-menu-frame", e);
        }
        onInlineMenuReady(e) {
            this.transport.on("inline-menu-ready", e);
        }
        onKeyDown(e) {
            this.transport.on("key-down", e);
        }
        onPageExcluded(e) {
            this.transport.on("page-excluded", e);
        }
        onShowInline(e) {
            this.transport.on("show-inline", e);
        }
        onRequestFillAuthorization(e) {
            this.transport.on("request-fill-authorization", e);
        }
        onShowSaveDialog(e) {
            this.transport.on("show-save-dialog", e);
        }
        onHideSaveDialog(e) {
            this.transport.on("hide-save-dialog", e);
        }
        onShowNotification(e) {
            this.transport.on("show-notification", e);
        }
        onHideNotification(e) {
            this.transport.on("hide-notification", e);
        }
        onReplaceNotification(e) {
            this.transport.on("replace-notification", e);
        }
        onResizeNotification(e) {
            this.transport.on("resize-notification", e);
        }
        onPerformEnterAnimation(e) {
            this.transport.on("notification-enter-animation", e);
        }
        onRequestFocus(e) {
            this.transport.on("focus-notification", e);
        }
        onNotificationExitComplete(e) {
            this.transport.on("notification-exit-complete", e);
        }
        onGetNestedFrameConfiguration(e) {
            this.transport.on("get-nested-frame-configuration", e);
        }
        inlineButtonPressed() {
            return this.transport.request(wr({
                name: "inline-button-pressed"
            }))
        }
        onRemoveInlineButton(e) {
            this.transport.on("remove-inline-button", e);
        }
        onRemoveInlineButtonTooltip(e) {
            this.transport.on("remove-inline-button-tooltip", e);
        }
        forwardInlineMenuPosition(e, t) {
            return this.transport.request(wr({
                name: "forward-inline-menu-position",
                data: {
                    configuration: e,
                    matchableFrameWindowProps: t
                }
            }, {
                targetParent: !0
            }))
        }
        removeInlineMenu() {
            return this.transport.request(wr({
                name: "remove-inline-menu",
                data: void 0
            }))
        }
        focusInlineMenuFrame() {
            return this.transport.request(wr({
                name: "focus-inline-menu-frame"
            }))
        }
        createCredential(e) {
            return this.transport.request({
                name: "create-credential",
                data: e
            })
        }
        getCredential(e) {
            return this.transport.request({
                name: "get-credential",
                data: e
            })
        }
        shouldInterceptWebauthnRequest() {
            return this.transport.request({
                name: "should-intercept-webauthn-request",
                data: void 0
            })
        }
        sendKeyDown(e, t, n) {
            return this.transport.request(wr({
                name: "key-down",
                data: {
                    key: e,
                    formEdited: t,
                    fieldEdited: n
                }
            }))
        }
        onInlineMenuOpened(e) {
            this.transport.on("inline-menu-opened", e);
        }
        onInlineMenuClosed(e) {
            this.transport.on("inline-menu-closed", e);
        }
        getNestedFrameConfiguration() {
            return this.transport.request(wr({
                name: "get-nested-frame-configuration"
            }))
        }
        showNotification(e) {
            return this.transport.request(wr({
                name: "show-notification",
                data: e
            }))
        }
        forwardActiveFieldDetails(e, t) {
            return this.transport.request(wr({
                name: "forward-active-field-details",
                data: {
                    activeFieldDetails: e,
                    matchableFrameWindowProps: t
                }
            }, {
                targetParent: !0
            }))
        }
        removeInlineButton(e) {
            return this.transport.request(wr({
                name: "remove-inline-button",
                data: {
                    frameIdentifier: e
                }
            }))
        }
        removeInlineButtonTooltip() {
            return this.transport.request(wr({
                name: "remove-inline-button-tooltip"
            }))
        }
        getShellPluginSiteConfig() {
            return this.transport.request({
                name: "shell-plugins-site-config"
            })
        }
        triggerShellPluginSaveIn1PasswordNotification() {
            return this.transport.request({
                name: "shell-plugins-save-in-1password-notification"
            })
        }
        triggerShellPluginFallbackNotification() {
            return this.transport.request({
                name: "shell-plugins-fallback-notification"
            })
        }
        getLastDetectedShellPluginsCredentials(e) {
            return this.transport.request({
                name: "shell-plugins-get-last-detected-credentials",
                data: e
            })
        }
        setLastDetectedShellPluginsCredentials(e) {
            return this.transport.request({
                name: "shell-plugins-set-last-detected-credentials",
                data: e
            })
        }
        onSshOpenCreateKeyModal(e) {
            return this.transport.on("ssh-focus-create-form", e)
        }
        sshFocusPublicKeyField() {
            return this.transport.request({
                name: "ssh-focus-public-key-field"
            })
        }
        onFocusChanged(e) {
            this.transport.on("frame-takes-focus", e);
        }
        notifyFocusTaken(e, t) {
            return this.transport.request(wr({
                name: "frame-takes-focus",
                data: {
                    frameIdentifier: e,
                    removeMenu: t
                }
            }))
        }
    }
    ("undefined" != typeof chrome && void 0 !== chrome.runtime && void 0 !== chrome.runtime.sendMessage && void 0 !== chrome.runtime.onMessage ? new fr : Ar.isSafariAppExtension() ? new Ar : new Sr);
    var Ir, Tr = function(e) {
        return {
            _tag: "Right",
            right: e
        }
    }, Pr = function(e) {
        return "Left" === e._tag
    }, Cr = (Ir = function(e, t) {
        return Ir = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t;
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        ,
        Ir(e, t)
    }
    ,
    function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        Ir(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n);
    }
    ), kr = function() {
        return kr = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ,
        kr.apply(this, arguments)
    }, Er = function(e) {
        return {
            _tag: "Left",
            left: e
        }
    }, Rr = function(e, t, n) {
        return Er([{
            value: e,
            context: t,
            message: n
        }])
    }, Dr = Tr, Fr = function() {
        function e(e, t, n, r) {
            this.name = e,
            this.is = t,
            this.validate = n,
            this.encode = r,
            this.decode = this.decode.bind(this);
        }
        return e.prototype.pipe = function(t, n) {
            var r = this;
            return void 0 === n && (n = "pipe(".concat(this.name, ", ").concat(t.name, ")")),
            new e(n,t.is,(function(e, n) {
                var i = r.validate(e, n);
                return Pr(i) ? i : t.validate(i.right, n)
            }
            ),this.encode === Lr && t.encode === Lr ? Lr : function(e) {
                return r.encode(t.encode(e))
            }
            )
        }
        ,
        e.prototype.asDecoder = function() {
            return this
        }
        ,
        e.prototype.asEncoder = function() {
            return this
        }
        ,
        e.prototype.decode = function(e) {
            return this.validate(e, [{
                key: "",
                type: this,
                actual: e
            }])
        }
        ,
        e
    }(), Lr = function(e) {
        return e
    };
    function Mr(e, t, n, r) {
        for (var i = e.length, o = Array(i + 1), a = 0; a < i; a++)
            o[a] = e[a];
        return o[i] = {
            key: t,
            type: n,
            actual: r
        },
        o
    }
    function Ur(e, t) {
        for (var n = t.length, r = 0; r < n; r++)
            e.push(t[r]);
    }
    var Br = Object.prototype.hasOwnProperty;
    function Or(e) {
        return Object.keys(e).map((function(t) {
            return "".concat(t, ": ").concat(e[t].name)
        }
        )).join(", ")
    }
    function Nr(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t].encode !== Lr)
                return !1;
        return !0
    }
    function xr(e) {
        return "{ ".concat(Or(e), " }")
    }
    function Wr(e) {
        return "Partial<".concat(e, ">")
    }
    function qr(e, t) {
        for (var n = !0, r = !0, i = !ei.is(e), o = 0, a = t; o < a.length; o++) {
            (u = a[o]) !== e && (n = !1),
            ei.is(u) && (r = !1);
        }
        if (n)
            return e;
        if (r)
            return t[t.length - 1];
        for (var s = {}, c = 0, l = t; c < l.length; c++) {
            var u = l[c];
            for (var d in u)
                Br.call(s, d) && !i && u[d] === e[d] || (s[d] = u[d]);
        }
        return s
    }
    function Vr(e) {
        switch (e._tag) {
        case "RefinementType":
        case "ReadonlyType":
            return Vr(e.type);
        case "InterfaceType":
        case "StrictType":
        case "PartialType":
            return e.props;
        case "IntersectionType":
            return e.types.reduce((function(e, t) {
                return Object.assign(e, Vr(t))
            }
            ), {})
        }
    }
    function Hr(e, t) {
        for (var n = Object.getOwnPropertyNames(e), r = !1, i = {}, o = 0; o < n.length; o++) {
            var a = n[o];
            Br.call(t, a) ? i[a] = e[a] : r = !0;
        }
        return r ? i : e
    }
    var Gr = {};
    function Kr(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            -1 !== t.indexOf(o) && n.push(o);
        }
        return n
    }
    function zr(e) {
        return "LiteralType" === e._tag
    }
    function _r(e) {
        return "InterfaceType" === e._tag
    }
    var jr = [];
    function Qr(e) {
        if (-1 !== jr.indexOf(e))
            return Gr;
        if (_r(e) || function(e) {
            return "StrictType" === e._tag
        }(e)) {
            var t = Gr;
            for (var n in e.props) {
                var r = e.props[n];
                zr(r) && (t === Gr && (t = {}),
                t[n] = [r.value]);
            }
            return t
        }
        if (function(e) {
            return "ExactType" === e._tag
        }(e) || function(e) {
            return "RefinementType" === e._tag
        }(e))
            return Qr(e.type);
        if (function(e) {
            return "IntersectionType" === e._tag
        }(e))
            return e.types.reduce((function(e, t) {
                return function(e, t) {
                    if (e === Gr)
                        return t;
                    if (t === Gr)
                        return e;
                    var n = Object.assign({}, e);
                    for (var r in t)
                        if (Br.call(e, r)) {
                            var i = Kr(e[r], t[r]);
                            if (!(i.length > 0)) {
                                n = Gr;
                                break
                            }
                            n[r] = i;
                        } else
                            n[r] = t[r];
                    return n
                }(e, Qr(t))
            }
            ), Gr);
        if (function(e) {
            return "UnionType" === e._tag
        }(e))
            return e.types.slice(1).reduce((function(e, t) {
                return function(e, t) {
                    if (e === Gr || t === Gr)
                        return Gr;
                    var n = Gr;
                    for (var r in e)
                        Br.call(t, r) && 0 === Kr(e[r], t[r]).length && (n === Gr && (n = {}),
                        n[r] = e[r].concat(t[r]));
                    return n
                }(e, Qr(t))
            }
            ), Qr(e.types[0]));
        if (function(e) {
            return "RecursiveType" === e._tag
        }(e)) {
            jr.push(e);
            var i = Qr(e.type);
            return jr.pop(),
            i
        }
        return Gr
    }
    new (function(e) {
        function t() {
            var t = e.call(this, "null", (function(e) {
                return null === e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "NullType",
            t
        }
        return Cr(t, e),
        t
    }(Fr));
    var Yr = new (function(e) {
        function t() {
            var t = e.call(this, "undefined", (function(e) {
                return void 0 === e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "UndefinedType",
            t
        }
        return Cr(t, e),
        t
    }(Fr));
    new (function(e) {
        function t() {
            var t = e.call(this, "void", Yr.is, Yr.validate, Lr) || this;
            return t._tag = "VoidType",
            t
        }
        return Cr(t, e),
        t
    }(Fr)),
    new (function(e) {
        function t() {
            var t = e.call(this, "unknown", (function(e) {
                return !0
            }
            ), Dr, Lr) || this;
            return t._tag = "UnknownType",
            t
        }
        return Cr(t, e),
        t
    }(Fr));
    var $r = new (function(e) {
        function t() {
            var t = e.call(this, "string", (function(e) {
                return "string" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "StringType",
            t
        }
        return Cr(t, e),
        t
    }(Fr))
      , Zr = new (function(e) {
        function t() {
            var t = e.call(this, "number", (function(e) {
                return "number" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "NumberType",
            t
        }
        return Cr(t, e),
        t
    }(Fr));
    new (function(e) {
        function t() {
            var t = e.call(this, "bigint", (function(e) {
                return "bigint" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "BigIntType",
            t
        }
        return Cr(t, e),
        t
    }(Fr));
    var Jr = new (function(e) {
        function t() {
            var t = e.call(this, "boolean", (function(e) {
                return "boolean" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "BooleanType",
            t
        }
        return Cr(t, e),
        t
    }(Fr))
      , Xr = new (function(e) {
        function t() {
            var t = e.call(this, "UnknownArray", Array.isArray, (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "AnyArrayType",
            t
        }
        return Cr(t, e),
        t
    }(Fr))
      , ei = new (function(e) {
        function t() {
            var t = e.call(this, "UnknownRecord", (function(e) {
                return null !== e && "object" == typeof e && !Array.isArray(e)
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "AnyDictionaryType",
            t
        }
        return Cr(t, e),
        t
    }(Fr))
      , ti = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.value = o,
            a._tag = "LiteralType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function ni(e, t) {
        void 0 === t && (t = JSON.stringify(e));
        var n = function(t) {
            return t === e
        };
        return new ti(t,n,(function(t, r) {
            return n(t) ? Dr(e) : Rr(t, r)
        }
        ),Lr,e)
    }
    !function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.keys = o,
            a._tag = "KeyofType",
            a
        }
        Cr(t, e);
    }(Fr);
    var ri = function(e) {
        function t(t, n, r, i, o, a) {
            var s = e.call(this, t, n, r, i) || this;
            return s.type = o,
            s.predicate = a,
            s._tag = "RefinementType",
            s
        }
        return Cr(t, e),
        t
    }(Fr);
    vi(Zr, (function(e) {
        return Number.isInteger(e)
    }
    ), "Int");
    var ii = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.runDefinition = o,
            a._tag = "RecursiveType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    Object.defineProperty(ii.prototype, "type", {
        get: function() {
            return this.runDefinition()
        },
        enumerable: !0,
        configurable: !0
    });
    var oi = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.type = o,
            a._tag = "ArrayType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function ai(e, t) {
        return void 0 === t && (t = "Array<".concat(e.name, ">")),
        new oi(t,(function(t) {
            return Xr.is(t) && t.every(e.is)
        }
        ),(function(t, n) {
            var r = Xr.validate(t, n);
            if (Pr(r))
                return r;
            for (var i = r.right, o = i.length, a = i, s = [], c = 0; c < o; c++) {
                var l = i[c]
                  , u = e.validate(l, Mr(n, String(c), e, l));
                if (Pr(u))
                    Ur(s, u.left);
                else {
                    var d = u.right;
                    d !== l && (a === i && (a = i.slice()),
                    a[c] = d);
                }
            }
            return s.length > 0 ? Er(s) : Dr(a)
        }
        ),e.encode === Lr ? Lr : function(t) {
            return t.map(e.encode)
        }
        ,e)
    }
    var si = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.props = o,
            a._tag = "InterfaceType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function ci(e, t) {
        void 0 === t && (t = xr(e));
        var n = Object.keys(e)
          , r = n.map((function(t) {
            return e[t]
        }
        ))
          , i = n.length;
        return new si(t,(function(e) {
            if (ei.is(e)) {
                for (var t = 0; t < i; t++) {
                    var o = n[t]
                      , a = e[o];
                    if (void 0 === a && !Br.call(e, o) || !r[t].is(a))
                        return !1
                }
                return !0
            }
            return !1
        }
        ),(function(e, t) {
            var o = ei.validate(e, t);
            if (Pr(o))
                return o;
            for (var a = o.right, s = a, c = [], l = 0; l < i; l++) {
                var u = n[l]
                  , d = s[u]
                  , p = r[l]
                  , m = p.validate(d, Mr(t, u, p, d));
                if (Pr(m))
                    Ur(c, m.left);
                else {
                    var g = m.right;
                    (g !== d || void 0 === g && !Br.call(s, u)) && (s === a && (s = kr({}, a)),
                    s[u] = g);
                }
            }
            return c.length > 0 ? Er(c) : Dr(s)
        }
        ),Nr(r) ? Lr : function(e) {
            for (var t = kr({}, e), o = 0; o < i; o++) {
                var a = n[o]
                  , s = r[o].encode;
                s !== Lr && (t[a] = s(e[a]));
            }
            return t
        }
        ,e)
    }
    var li = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.props = o,
            a._tag = "PartialType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function ui(e, t) {
        void 0 === t && (t = Wr(xr(e)));
        var n = Object.keys(e)
          , r = n.map((function(t) {
            return e[t]
        }
        ))
          , i = n.length;
        return new li(t,(function(t) {
            if (ei.is(t)) {
                for (var r = 0; r < i; r++) {
                    var o = n[r]
                      , a = t[o];
                    if (void 0 !== a && !e[o].is(a))
                        return !1
                }
                return !0
            }
            return !1
        }
        ),(function(t, r) {
            var o = ei.validate(t, r);
            if (Pr(o))
                return o;
            for (var a = o.right, s = a, c = [], l = 0; l < i; l++) {
                var u = n[l]
                  , d = s[u]
                  , p = e[u]
                  , m = p.validate(d, Mr(r, u, p, d));
                if (Pr(m))
                    void 0 !== d && Ur(c, m.left);
                else {
                    var g = m.right;
                    g !== d && (s === a && (s = kr({}, a)),
                    s[u] = g);
                }
            }
            return c.length > 0 ? Er(c) : Dr(s)
        }
        ),Nr(r) ? Lr : function(e) {
            for (var t = kr({}, e), o = 0; o < i; o++) {
                var a = n[o]
                  , s = e[a];
                void 0 !== s && (t[a] = r[o].encode(s));
            }
            return t
        }
        ,e)
    }
    !function(e) {
        function t(t, n, r, i, o, a) {
            var s = e.call(this, t, n, r, i) || this;
            return s.domain = o,
            s.codomain = a,
            s._tag = "DictionaryType",
            s
        }
        Cr(t, e);
    }(Fr);
    var di = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.types = o,
            a._tag = "UnionType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function pi(e, t) {
        void 0 === t && (t = function(e) {
            return "(" + e.map((function(e) {
                return e.name
            }
            )).join(" | ") + ")"
        }(e));
        var n = function(e) {
            for (var t = Qr(e[0]), n = Object.keys(t), r = e.length, i = function(n) {
                for (var i = t[n].slice(), o = [t[n]], a = 1; a < r; a++) {
                    var s = Qr(e[a])[n];
                    if (void 0 === s)
                        return "continue-keys";
                    if (s.some((function(e) {
                        return -1 !== i.indexOf(e)
                    }
                    )))
                        return "continue-keys";
                    i.push.apply(i, s),
                    o.push(s);
                }
                return {
                    value: [n, o]
                }
            }, o = 0, a = n; o < a.length; o++) {
                var s = i(a[o]);
                if ("object" == typeof s)
                    return s.value
            }
        }(e);
        if (void 0 !== n && e.length > 0) {
            var r = n[0]
              , i = n[1]
              , o = i.length
              , a = function(e) {
                for (var t = 0; t < o; t++)
                    if (-1 !== i[t].indexOf(e))
                        return t
            };
            return new Si(t,(function(t) {
                if (ei.is(t)) {
                    var n = a(t[r]);
                    return void 0 !== n && e[n].is(t)
                }
                return !1
            }
            ),(function(t, n) {
                var i = ei.validate(t, n);
                if (Pr(i))
                    return i;
                var o = i.right
                  , s = a(o[r]);
                if (void 0 === s)
                    return Rr(t, n);
                var c = e[s];
                return c.validate(o, Mr(n, String(s), c, o))
            }
            ),Nr(e) ? Lr : function(n) {
                var i = a(n[r]);
                if (void 0 === i)
                    throw new Error("no codec found to encode value in union codec ".concat(t));
                return e[i].encode(n)
            }
            ,e,r)
        }
        return new di(t,(function(t) {
            return e.some((function(e) {
                return e.is(t)
            }
            ))
        }
        ),(function(t, n) {
            for (var r = [], i = 0; i < e.length; i++) {
                var o = e[i]
                  , a = o.validate(t, Mr(n, String(i), o, t));
                if (!Pr(a))
                    return Dr(a.right);
                Ur(r, a.left);
            }
            return Er(r)
        }
        ),Nr(e) ? Lr : function(n) {
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                if (o.is(n))
                    return o.encode(n)
            }
            throw new Error("no codec found to encode value in union type ".concat(t))
        }
        ,e)
    }
    var mi = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.types = o,
            a._tag = "IntersectionType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function gi(e, t) {
        void 0 === t && (t = "(".concat(e.map((function(e) {
            return e.name
        }
        )).join(" & "), ")"));
        var n = e.length;
        return new mi(t,(function(t) {
            return e.every((function(e) {
                return e.is(t)
            }
            ))
        }
        ),0 === e.length ? Dr : function(t, r) {
            for (var i = [], o = [], a = 0; a < n; a++) {
                var s = e[a]
                  , c = s.validate(t, Mr(r, String(a), s, t));
                Pr(c) ? Ur(o, c.left) : i.push(c.right);
            }
            return o.length > 0 ? Er(o) : Dr(qr(t, i))
        }
        ,0 === e.length ? Lr : function(t) {
            return qr(t, e.map((function(e) {
                return e.encode(t)
            }
            )))
        }
        ,e)
    }
    !function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.types = o,
            a._tag = "TupleType",
            a
        }
        Cr(t, e);
    }(Fr);
    var hi = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.type = o,
            a._tag = "ReadonlyType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    !function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.type = o,
            a._tag = "ReadonlyArrayType",
            a
        }
        Cr(t, e);
    }(Fr);
    var yi = function(e, t) {
        return function(e, t) {
            void 0 === t && (t = function(e) {
                return _r(e) ? "{| ".concat(Or(e.props), " |}") : function(e) {
                    return "PartialType" === e._tag
                }(e) ? Wr("{| ".concat(Or(e.props), " |}")) : "Exact<".concat(e.name, ">")
            }(e));
            var n = Vr(e);
            return new fi(t,e.is,(function(t, r) {
                var i = ei.validate(t, r);
                if (Pr(i))
                    return i;
                var o = e.validate(t, r);
                return Pr(o) ? o : Tr(Hr(o.right, n))
            }
            ),(function(t) {
                return e.encode(Hr(t, n))
            }
            ),e)
        }(ci(e), t)
    }
      , fi = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.type = o,
            a._tag = "ExactType",
            a
        }
        return Cr(t, e),
        t
    }(Fr);
    function vi(e, t, n) {
        var r;
        return void 0 === n && (n = "(".concat(e.name, " | ").concat((r = t).displayName || r.name || "<function".concat(r.length, ">"), ")")),
        new ri(n,(function(n) {
            return e.is(n) && t(n)
        }
        ),(function(n, r) {
            var i = e.validate(n, r);
            if (Pr(i))
                return i;
            var o = i.right;
            return t(o) ? Dr(o) : Rr(o, r)
        }
        ),e.encode,e,t)
    }
    new (function(e) {
        function t() {
            var t = e.call(this, "Function", (function(e) {
                return "function" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "FunctionType",
            t
        }
        return Cr(t, e),
        t
    }(Fr)),
    new (function(e) {
        function t() {
            var t = e.call(this, "never", (function(e) {
                return !1
            }
            ), (function(e, t) {
                return Rr(e, t)
            }
            ), (function() {
                throw new Error("cannot encode never")
            }
            )) || this;
            return t._tag = "NeverType",
            t
        }
        return Cr(t, e),
        t
    }(Fr)),
    new (function(e) {
        function t() {
            var t = e.call(this, "any", (function(e) {
                return !0
            }
            ), Dr, Lr) || this;
            return t._tag = "AnyType",
            t
        }
        return Cr(t, e),
        t
    }(Fr)),
    vi(Zr, Number.isInteger, "Integer");
    var Si = function(e) {
        function t(t, n, r, i, o, a) {
            var s = e.call(this, t, n, r, i, o) || this;
            return s.tag = a,
            s
        }
        return Cr(t, e),
        t
    }(di);
    new (function(e) {
        function t() {
            var t = e.call(this, "object", (function(e) {
                return null !== e && "object" == typeof e
            }
            ), (function(e, n) {
                return t.is(e) ? Dr(e) : Rr(e, n)
            }
            ), Lr) || this;
            return t._tag = "ObjectType",
            t
        }
        return Cr(t, e),
        t
    }(Fr)),
    function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, n, r, i) || this;
            return a.props = o,
            a._tag = "StrictType",
            a
        }
        Cr(t, e);
    }(Fr);
    const Ai = new Fr("JsonParsedBrowserifiedBuffer",(e=>e instanceof Array && e.every((e=>"number" == typeof e))),((e,t)=>{
        if ("object" != typeof e || null === e)
            return Rr(e, t);
        if (2 !== Object.keys(e).length)
            return Rr(e, t);
        const n = e;
        if (void 0 === n.type || "Buffer" !== n.type)
            return Rr(e, t);
        const {data: r} = n;
        return void 0 !== r && r instanceof Array && r.every((e=>"number" == typeof e)) ? Dr(r) : Rr(e, t)
    }
    ),(e=>e))
      , wi = new Fr("StringedInt",(e=>"number" == typeof e),((e,t)=>{
        if ("string" != typeof e)
            return Rr(e, t);
        const n = parseInt(e, 10);
        return isNaN(n) ? Rr(e, t) : Dr(n)
    }
    ),(e=>e))
      , bi = gi([ci({
        type: ni("public-key"),
        id: pi([ai(Zr), Ai])
    }), ui({
        transports: ai($r)
    })], "PublicKeyDescriptor")
      , Ii = pi([ni("security-key"), ni("client-device"), ni("hybrid"), $r], "PublicKeyCredentialHints")
      , Ti = ui({
        publicKey: gi([ci({
            rp: gi([ci({
                name: $r
            }), ui({
                id: $r
            })]),
            user: yi({
                id: pi([ai(Zr), Ai]),
                name: $r,
                displayName: $r
            }),
            challenge: pi([ai(Zr), Ai]),
            pubKeyCredParams: ai(yi({
                type: ni("public-key"),
                alg: pi([Zr, wi])
            }))
        }), ui({
            timeout: pi([Zr, wi]),
            excludeCredentials: ai(bi),
            hints: ai(Ii)
        })])
    }, "CreateCredentialRequestCodec")
      , Pi = function(e, t) {
        return void 0 === t && (t = "Readonly<".concat(e.name, ">")),
        new hi(t,e.is,e.validate,e.encode,e)
    }(ui({
        publicKey: gi([ci({
            challenge: pi([ai(Zr), Ai])
        }, "RequiredInPublicKey"), ui({
            allowCredentials: ai(bi),
            timeout: pi([Zr, wi]),
            rpId: $r,
            hints: ai(Ii)
        }, "OptionalInPublicKey")]),
        mediation: $r,
        allowed: Jr
    }), "GetCredentialRequestCodec")
      , Ci = ()=>globalThis.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
      , ki = ()=>{
        let e;
        return {
            resolve: t=>e(t),
            promise: new Promise((t=>{
                e = t;
            }
            ))
        }
    }
    ;
    var Ei;
    !function(e) {
        e.Create = "create-credential",
        e.Get = "get-credential",
        e.ShouldInterceptWebauthn = "should-intercept-webauthn";
    }(Ei || (Ei = {}));
    const Ri = e=>{
        if (!e)
            return Li();
        if (e.aborted)
            return Promise.resolve({
                type: "aborted"
            });
        const t = ki()
          , n = ()=>{
            t.resolve({
                type: "aborted"
            }),
            e.removeEventListener("abort", n);
        }
        ;
        return e.addEventListener("abort", n),
        t.promise
    }
      , Di = e=>"string" == typeof e && 0 !== e.length
      , Fi = e=>new Promise((t=>{
        setTimeout((()=>t({
            type: "timeout"
        })), e);
    }
    ))
      , Li = ()=>new Promise((()=>{}
    ));
    class Mi {
        constructor(e) {
            this.send = async(e,{body: t, signal: n})=>{
                const r = Ci()
                  , i = await this.handleOutgoingSyn(r, e, n);
                if ("ack" !== i.type)
                    return i;
                const o = i.data;
                return (await this.handleOutgoingDirect(o.ackedById, r, e, t, n)).data
            }
            ,
            this.getRoutes = ()=>Object.keys(this.routes),
            this.handleOutgoingSyn = async(e,t,n)=>{
                const r = Ri(n)
                  , i = {
                    msgId: e,
                    source: this.source,
                    type: Mi.opSynType,
                    message: void 0,
                    name: t
                };
                this.log.debug("starting request sequence", t);
                const o = ki();
                this.synRequests[e] = o,
                window.postMessage(i),
                this.log.debug("starting ack race", t);
                const a = await Promise.race([o.promise, Fi(1e3), r]);
                if ("timeout" === a.type)
                    return this.log.debug("finished request sequence: ack timed out", t),
                    delete this.synRequests[e],
                    {
                        type: Mi.NoReceivingEnd
                    };
                if ("aborted" === a.type || (null == n ? void 0 : n.aborted))
                    return this.log.debug("finished request sequence: aborted sync", t),
                    delete this.synRequests[e],
                    this.throwAbort(n);
                this.log.debug(`ack race won by: ${a.data.ackedById}`, t);
                const s = ki();
                return this.directRequests[e] = s,
                a
            }
            ,
            this.handleIncomingSyn = async e=>{
                if (!this.routes[e.name])
                    return void this.log.debug("received a request with no handler to call", e.name);
                const t = {
                    msgId: e.msgId,
                    source: this.source,
                    destination: e.source,
                    name: e.name,
                    type: Mi.opSynAckType,
                    message: void 0
                };
                window.postMessage(t);
            }
            ,
            this.handleIncomingSynAck = e=>{
                if (void 0 === this.synRequests[e.msgId])
                    return;
                this.synRequests[e.msgId].resolve({
                    type: "ack",
                    data: {
                        ackedById: e.source
                    }
                }),
                delete this.synRequests[e.msgId];
            }
            ,
            this.handleOutgoingDirect = async(e,t,n,r,i)=>{
                const o = Ri(i)
                  , a = ki();
                this.directRequests[t] = a;
                const s = {
                    msgId: t,
                    source: this.source,
                    destination: e,
                    type: Mi.opDirectRequestType,
                    message: r,
                    name: n
                };
                this.log.debug(`sending direct request to: ${e}`, n),
                window.postMessage(s);
                const c = await Promise.race([a.promise, o]);
                if (delete this.directRequests[t],
                "aborted" === c.type) {
                    const e = Object.assign(Object.assign({}, s), {
                        type: Mi.opAbortType
                    });
                    return e.reason = null == i ? void 0 : i.reason,
                    this.log.debug("notifying receiver to abort", n),
                    window.postMessage(e),
                    this.log.debug("finished request sequence: aborted", n),
                    this.throwAbort(i)
                }
                return this.log.debug("finished request sequence: success", n),
                c
            }
            ,
            this.handleIncomingDirectRequest = async e=>{
                const t = this.routes[e.name];
                if (!t)
                    return void this.log.error("received a request with no handler to call", e.name);
                const n = new AbortController;
                this.abortableRequests[e.msgId] = n;
                const r = Ri(n.signal);
                let i;
                try {
                    i = await Promise.race([t({
                        body: e.message,
                        signal: n.signal
                    }), r]);
                } catch (e) {
                    const t = e instanceof Error ? e.message : "unknown";
                    i = {
                        type: Mi.HandlerError,
                        data: {
                            reason: t
                        }
                    };
                }
                delete this.abortableRequests[e.msgId];
                const o = i;
                if (o && "aborted" === (null == o ? void 0 : o.type))
                    return;
                const a = {
                    msgId: e.msgId,
                    source: this.source,
                    destination: e.source,
                    name: e.name,
                    type: Mi.opDirectResponseType,
                    message: i
                };
                window.postMessage(a);
            }
            ,
            this.handleIncomingAbortRequest = e=>{
                if (void 0 === this.abortableRequests[e.msgId])
                    return void this.log.debug(`received abort ${e.msgId} for no active request - likely already completed`, e.name);
                this.abortableRequests[e.msgId].abort(e.reason),
                delete this.abortableRequests[e.msgId];
            }
            ,
            this.handleIncomingResponse = e=>{
                if (void 0 === this.directRequests[e.msgId])
                    return void this.log.debug(`received response ${e.msgId} with no promise to resolve - likely already aborted`, e.name);
                this.directRequests[e.msgId].resolve({
                    type: "completed",
                    data: e.message
                }),
                delete this.directRequests[e.msgId];
            }
            ,
            this.throwAbort = e=>{
                if (null == e ? void 0 : e.reason)
                    throw new DOMException(null == e ? void 0 : e.reason,"AbortError");
                throw new DOMException("signal is aborted without reason","AbortError")
            }
            ,
            this.validateMessage = e=>{
                const t = "validate";
                if ("object" != typeof e || null === e)
                    return this.log.debug("invalid message - not an object", t),
                    !1;
                const n = e;
                return Di(n.msgId) ? Di(n.source) ? Di(n.name) ? n.type === Mi.opSynType || n.type === Mi.opSynAckType || n.type === Mi.opAbortType || n.type === Mi.opDirectRequestType || n.type === Mi.opDirectResponseType || (this.log.debug("invalid message: type unsupported", t),
                !1) : (this.log.debug("invalid message - missing name", t),
                !1) : (this.log.debug("invalid message - missing source", t),
                !1) : (this.log.debug("invalid message - missing msgId", t),
                !1)
            }
            ,
            this.routes = e,
            this.synRequests = {},
            this.abortableRequests = {},
            this.directRequests = {},
            this.source = Ci(),
            this.debug = !1,
            this.log = {
                error: (e,t)=>console.error(`PWM-${this.source}-${t}: ${e}`),
                debug: (e,t)=>{
                    this.debug && console.info(`PWM-${this.source}-${t}: ${e}`);
                }
            },
            window.addEventListener("message", (e=>{
                if (!this.validateMessage(e.data))
                    return;
                const t = e.data;
                if (t.source === this.source)
                    return;
                if (t.destination && t.destination !== this.source)
                    return;
                const {type: n} = t;
                n === Mi.opSynType && this.handleIncomingSyn(t),
                n === Mi.opSynAckType && this.handleIncomingSynAck(t),
                n === Mi.opAbortType && this.handleIncomingAbortRequest(t),
                n === Mi.opDirectRequestType && this.handleIncomingDirectRequest(t),
                n === Mi.opDirectResponseType && this.handleIncomingResponse(t);
            }
            ));
        }
    }
    Mi.opSynType = "op-window-syn",
    Mi.opSynAckType = "op-window-syn-ack",
    Mi.opAbortType = "op-window-abort",
    Mi.opDirectRequestType = "op-window-direct-request",
    Mi.opDirectResponseType = "op-window-direct-response",
    Mi.NoReceivingEnd = "no-receiving-end",
    Mi.HandlerError = "uncaught-handler-error";
    const Ui = e=>"internal-error" === e || "invalid-request" === e ? {
        type: "create-credential-error",
        data: {
            reason: e
        }
    } : ("unknown" === e.data.reason && console.error("Unknown error ocurred while creating passkey"),
    "timeout" === e.data.reason || "fallback-requested" === e.data.reason || "user-cancelled" === e.data.reason || "duplicate" === e.data.reason ? {
        type: "create-credential-error",
        data: {
            reason: e.data.reason
        }
    } : {
        type: "create-credential-error",
        data: {
            reason: "internal-error"
        }
    })
      , Bi = async e=>{
        const t = Ri(e.signal)
          , n = (e=>{
            let t;
            try {
                t = JSON.parse(e);
            } catch (e) {
                return
            }
            const n = Ti.decode(t);
            if (!Pr(n))
                return Ti.encode(n.right)
        }
        )(e.body.data);
        if (!n)
            return Ui("invalid-request");
        let r;
        try {
            r = await Promise.race([br.createCredential(n), t]);
        } catch (e) {
            return Ui("internal-error")
        }
        return r ? "aborted" === r.type ? Ui("invalid-request") : "create-credential-error" === r.type ? Ui(r) : {
            type: "create-credential-success",
            data: r.data.credential
        } : Ui("internal-error")
    }
      , Oi = e=>"internal-error" === e || "invalid-request" === e ? {
        type: "get-credential-error",
        data: {
            reason: e
        }
    } : ("unknown" === e.data.reason && console.error("Unknown error ocurred while creating passkey"),
    "timeout" === e.data.reason || "fallback-requested" === e.data.reason || "user-cancelled" === e.data.reason ? {
        type: "get-credential-error",
        data: {
            reason: e.data.reason
        }
    } : {
        type: "get-credential-error",
        data: {
            reason: "internal-error"
        }
    })
      , Ni = async e=>{
        const t = Ri(e.signal)
          , n = (e=>{
            let t;
            try {
                t = JSON.parse(e);
            } catch (e) {
                return
            }
            const n = Pi.decode(t);
            if (!Pr(n))
                return Pi.encode(n.right)
        }
        )(e.body.data);
        if (!n)
            return Oi("invalid-request");
        let r;
        try {
            r = await Promise.race([br.getCredential(n), t]);
        } catch (e) {
            return Oi("internal-error")
        }
        return r ? "aborted" === r.type ? Oi("invalid-request") : "get-credential-error" === r.type ? Oi(r) : {
            type: "get-credential-success",
            data: r.data.credential
        } : Oi("internal-error")
    }
      , xi = async()=>{
        let e;
        try {
            e = await Promise.race([br.shouldInterceptWebauthnRequest().then((e=>({
                type: "success",
                data: e
            }))), Fi(2e3)]);
        } catch (e) {
            return {
                type: "should-intercept-webauthn-error",
                data: {
                    reason: "internal-error"
                }
            }
        }
        return "timeout" === e.type ? {
            type: "should-intercept-webauthn-error",
            data: {
                reason: "timeout"
            }
        } : {
            type: "should-intercept-webauthn-success",
            data: e.data
        }
    }
    ;
    !0 !== window.webauthnContentScriptInjected && (window.webauthnContentScriptInjected = !0,
    function() {
        const e = {
            [Ei.Create]: Bi,
            [Ei.Get]: Ni,
            [Ei.ShouldInterceptWebauthn]: xi
        };
        new Mi(e);
    }());

}
)();
