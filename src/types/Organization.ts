export type Organization = {
  readonly id: number;
  readonly _parentOrganization?: number;
  readonly _logo: string;
  readonly model: string;
  readonly _invoiceParent: boolean;
  readonly _upcomingDiscount: string;
  readonly _upcomingServicefee: string;
  readonly name: string;
  readonly short: string;
  readonly maxHeightHorizontal: number;
  readonly maxHeightVertical: number;
  readonly _defaultProfilePicture?: string;
  readonly website: string;
  readonly legalDisclosureLink?: string;
  readonly privacyPolicyLink?: string;
  readonly telephone?: string;
  readonly email: string;
  readonly street: string;
  readonly city: string;
  readonly country: string;
  readonly _currentAccountInterval: number;
  readonly _nextAccountInterval: number;
  readonly _nextPaymentDate: string;
  readonly _applyNpoDiscount: boolean;
  readonly _npoRequestStatus: number;
  readonly accountingEmail: string;
  readonly taxId: string;
  readonly tradeId: string;
  readonly isUsingDebit: boolean;
  readonly _debitName?: string;
  readonly _debitIBAN?: string;
  readonly _debitBIC?: string;
  readonly _debitSepaDate?: string;
  readonly _debitSepaMandate?: string;
  readonly moduleMembersEnabled: boolean;
  readonly moduleCalendarEnabled: boolean;
  readonly moduleProtocolsEnabled: boolean;
  readonly moduleBookkeepingEnabled: boolean;
  readonly moduleInventoryEnabled: boolean;
  readonly moduleStorageEnabled: boolean;
  readonly moduleTasksEnabled: boolean;
  readonly memberAreaStorageSharesEnabled: boolean;
  readonly memberAreaBookkeepingEnabled: boolean;
  readonly memberAreaProtocolsEnabled: boolean;
  readonly memberAreaMemberListEnabled: boolean;
  readonly memberAreaInventoryEnabled: boolean;
  readonly memberAreaBulletinBoardEnabled: boolean;
  readonly memberAreaShowChairmenInProfile: boolean;
  readonly memberAreaBulletinBoardLimitPostingToChairmen: boolean;
  readonly memberAreaAllowICSExport: boolean;
  readonly memberAreaCalendarShowParticipants: boolean;
  readonly memberAreaAllowInvoiceSubmission: boolean;
  readonly memberAreaAllowProfileChanges: boolean;
  readonly memberAreaMemberListShowOnlyPrimaryEmail: boolean;
  readonly memberAreaMemberListLimitByGroup: boolean;
  readonly memberAreaShowInvoiceStatusInProfile: boolean;
  readonly memberAreaMemberListColumns: string;
  readonly memberAreaMemberListDefaultOrdering: string;
  readonly memberAreaMemberListDefaultPageSize: number;
  readonly membershipCTEDownload: boolean;
  readonly sendEmailNotificationForMemberChanges: boolean;
  readonly allotMemberIdAutomatically: boolean;
  readonly _nextMemberId: number;
  readonly membershipAnniversaries: string;
  readonly birthdayAnniversaries: string;
  readonly birthdayAnniversariesDaysInAdvance: number;
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly memberAreaShowTitlePicture: boolean;
  readonly memberAreaTitlePicture?: string;
  readonly memberAreaShowTitlePictureCaption: boolean;
  readonly memberAreaLimitTitlePictureWidth: boolean;
  readonly defaultEventDurationInMinutes: number;
  readonly eventNextDayThreshold: string;
  readonly defaultDurationForBookingFilter: string;
  readonly defaultCalendarView: string;
  readonly defaultLocationForEvents: string;
  readonly sendEmailsToResignedMembers: boolean;
  readonly senderNameForEmails: string;
  readonly reconnectSmtpAfterNumberOfEmails: number;
  readonly moveResignedMembersToWasteBasket: boolean;
  readonly moveResignedMembersToWasteBasketAfterDays: number;
  readonly passwordMinimumLength: number;
  readonly passwordCapitalLetterRequired: boolean;
  readonly passwordNumberRequired: boolean;
  readonly passwordSpecialCharacterRequired: boolean;
  readonly deleteWasteBasketAfterDays: number;
  readonly deleteChangeLogsAfterDays: number;
  readonly deleteLoginLogsAfterDays: number;
  readonly deleteEmailLogsAfterDays: number;
  readonly _documentTemplate: string;
  readonly _documentLogoEnabled: boolean;
  readonly _documentNameEnabled: boolean;
  readonly _documentFooterEnabled: boolean;
  readonly documentUseTemplateInProfileExport: boolean;
  readonly storage_certs: string;
  readonly storage_invoices: string;
  readonly storage_letters: string;
  readonly storage_protocols: string;
  readonly storage_share: string;
  readonly storageMemberDocuments: number;
  readonly storageInvoices: number;
  readonly storageLetters: number;
  readonly storageProtocols: number;
  readonly storageShares: number;
  readonly storageSharedOrganizationFiles: number;
  readonly storageAddressCustomFields: number;
  readonly storageEventCustomFields: number;
  readonly storageInventoryObjectCustomFields: number;
  readonly _integrationDropBoxMemberDocumentsPath?: string;
  readonly _integrationDropBoxLettersPath?: string;
  readonly _integrationDropBoxProtocolsPath?: string;
  readonly _integrationDropBoxSharesPath?: string;
  readonly _integrationDropBoxInvoicesPath?: string;
  readonly _integrationDropBoxSharedOrganizationFilesPath?: string;
  readonly _integrationDropBoxAddressCustomFieldsPath?: string;
  readonly _integrationDropBoxEventCustomFieldsPath?: string;
  readonly _integrationDropBoxInventoryObjectCustomFieldsPath?: string;
  readonly allowAllAdminsToUseDropBox: boolean;
  readonly _integrationDosbEnabled: boolean;
  readonly DOSB_orgNumber?: string;
  readonly _integrationSuederelbeAgreement?: string;
  readonly _integrationApiStatus: number;
  readonly _integrationApiEnabled: boolean;
  readonly _integrationDatevClientId?: string;
  readonly _integrationDatevConsultantId?: number;
  readonly bookkeepingLockCommitDate?: string;
  readonly invoiceDefaultTaxPercentage: string;
  readonly _invoiceNextNumber: number;
  readonly _invoiceNumberPattern: string;
  readonly _invoiceCancelUseCustomNumber: boolean;
  readonly _invoiceCancelNextNumber: number;
  readonly _invoiceCancelNumberPattern: string;
  readonly _invoiceMembershipfeeUseCustomNumber: boolean;
  readonly _invoiceMembershipfeeNextNumber: number;
  readonly _invoiceMembershipfeeNumberPattern: string;
  readonly invoicePaymentInformationCash: string;
  readonly invoicePaymentInformationAccount: string;
  readonly invoicePaymentInformationDebit: string;
  readonly invoicePaymentInformationOther: string;
  readonly invoiceMembershipFeeAutoCreationEnabled: boolean;
  readonly invoiceMembershipFeeName: string;
  readonly invoiceMembershipFeePeriodNamePattern: string;
  readonly invoiceMembershipFeeCreateLater: boolean;
  readonly invoiceMembershipFeeCreateShiftDays: number;
  readonly invoiceSepaPainReferenceTextPattern: string;
  readonly invoiceTaxRatePerInvoiceItem: boolean;
  readonly invoice_refNumber: string;
  readonly invoiceReferenceNumberMode: number;
  readonly smtp_security: string;
  readonly smtp_port: number;
  readonly _integrationSmtpHost: string;
  readonly _integrationSmtpPort: number;
  readonly _integrationSmtpEncryption: number;
  readonly privateAddressPattern: string;
  readonly businessAddressPattern: string;
  readonly bookkeepingCurrency: string;
  readonly bookkeepingStandardFormOfAccountsEnabled: boolean;
  readonly bookkeepingStandardFormOfAccounts: string;
  readonly bookkeepingBusinessYearStart: string;
  readonly bookkeepingElectronicDonationEnabled: boolean;
  readonly bookkeepingDonationSigningImage?: string;
  readonly bookkeepingDonationCityForSigning?: string;
  readonly bookkeepingDonationPurpose: string;
  readonly bookkepingNoticeOfExemptionDate?: string;
  readonly bookkeeping60AoDate?: string;
  readonly bookkepingNoticeOfExemptionDuration: string;
  readonly bookkeepingTaxAuthority: string;
  readonly defaultIban: string;
  readonly defaultBic: string;
  readonly creditorId: string;
  readonly registerOfAssociationsId: string;
  readonly registerCourt: string;
  readonly _emailTextTemplatePasswordNotification: string;
  readonly _emailTextTemplatePasswordChange: string;
  readonly _emailTextTemplateTaskNotification: string;
  readonly _emailTextTemplateEventNotificationForMember: string;
  readonly _emailTextTemplateEventNotificationForAddress: string;
  readonly _emailTextTemplateApplicationConfirmation: string;
  readonly _emailTextTemplateInvoice: string;
  readonly bulkEmailHeader: string;
  readonly membershipCTE: string;
  readonly _accessControl: number;
  readonly _currentAccountScope: number;
  readonly _currentAccountSize: number;
  readonly _nextAccountScop: number;
  readonly _nextAccountSize: number;
  readonly dropBoxOwner?: string;
  readonly _integrationApiUser: number;
  readonly _taxConsultantUser?: number;
  readonly invoiceDefaultBankAccount: number;
  readonly invoiceMembershipFeeDefaultBankAccount: number;
  readonly invoiceMembershipFeeDefaultBillingAccount: number;
};