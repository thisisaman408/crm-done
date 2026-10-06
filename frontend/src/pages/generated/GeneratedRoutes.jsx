import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const FormMask = lazy(() => import('./FormMask'));
const SmsCampaignCompleted = lazy(() => import('./SmsCampaignCompleted'));
const TenantSupportTicketsGrid = lazy(() => import('./TenantSupportTicketsGrid'));
const LeadsList = lazy(() => import('./LeadsList'));
const Contacts = lazy(() => import('./Contacts'));
const UiDragula = lazy(() => import('./UiDragula'));
const LeadsDetails = lazy(() => import('./LeadsDetails'));
const LeaveRequests = lazy(() => import('./LeaveRequests'));
const SalesRepComparisonReport = lazy(() => import('./SalesRepComparisonReport'));
const ProjectReports = lazy(() => import('./ProjectReports'));
const Cities = lazy(() => import('./Cities'));
const SocialFeed = lazy(() => import('./SocialFeed'));
const FormPickers = lazy(() => import('./FormPickers'));
const AttendanceSummaryReport = lazy(() => import('./AttendanceSummaryReport'));
const Calls = lazy(() => import('./Calls'));
const WhatsappCampaign = lazy(() => import('./WhatsappCampaign'));
const SalesDashboard = lazy(() => import('./SalesDashboard'));
const CallHistory = lazy(() => import('./CallHistory'));
const Pipeline = lazy(() => import('./Pipeline'));
const RelationshipMap = lazy(() => import('./RelationshipMap'));
const ProposalsList = lazy(() => import('./ProposalsList'));
const MembershipTransactions = lazy(() => import('./MembershipTransactions'));
const UiImages = lazy(() => import('./UiImages'));
const Activities = lazy(() => import('./Activities'));
const PipelineStageReport = lazy(() => import('./PipelineStageReport'));
const InvoiceSettings = lazy(() => import('./InvoiceSettings'));
const Pages = lazy(() => import('./Pages'));
const FormVertical = lazy(() => import('./FormVertical'));
const UiBreadcrumb = lazy(() => import('./UiBreadcrumb'));
const LayoutDark = lazy(() => import('./LayoutDark'));
const Storage = lazy(() => import('./Storage'));
const AddInvoices = lazy(() => import('./AddInvoices'));
const AutomationRules = lazy(() => import('./AutomationRules'));
const Estimations = lazy(() => import('./Estimations'));
const DealRiskAnalysis = lazy(() => import('./DealRiskAnalysis'));
const WinLossAnalysis = lazy(() => import('./WinLossAnalysis'));
const ProjectsList = lazy(() => import('./ProjectsList'));
const LockScreen = lazy(() => import('./LockScreen'));
const BlogCategories = lazy(() => import('./BlogCategories'));
const Index = lazy(() => import('./Index'));
const DatabaseBackup = lazy(() => import('./DatabaseBackup'));
const CompanyReports = lazy(() => import('./CompanyReports'));
const AiSettings = lazy(() => import('./AiSettings'));
const AiInsights = lazy(() => import('./AiInsights'));
const FormInputGroups = lazy(() => import('./FormInputGroups'));
const Calendar = lazy(() => import('./Calendar'));
const SmsCampaignArchieved = lazy(() => import('./SmsCampaignArchieved'));
const Tasks = lazy(() => import('./Tasks'));
const FormValidation = lazy(() => import('./FormValidation'));
const UiTypography = lazy(() => import('./UiTypography'));
const IconPe7 = lazy(() => import('./IconPe7'));
const CompaniesList = lazy(() => import('./CompaniesList'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const IconIonic = lazy(() => import('./IconIonic'));
const VideoCall = lazy(() => import('./VideoCall'));
const Testimonials = lazy(() => import('./Testimonials'));
const UiModals = lazy(() => import('./UiModals'));
const Deals = lazy(() => import('./Deals'));
const Invoice = lazy(() => import('./Invoice'));
const EditBlog = lazy(() => import('./EditBlog'));
const FormHorizontal = lazy(() => import('./FormHorizontal'));
const Currencies = lazy(() => import('./Currencies'));
const AskYourData = lazy(() => import('./AskYourData'));
const AiLeadScoring = lazy(() => import('./AiLeadScoring'));
const Email = lazy(() => import('./Email'));
const LeaveBalanceSummaryReport = lazy(() => import('./LeaveBalanceSummaryReport'));
const Products = lazy(() => import('./Products'));
const EmailSettings = lazy(() => import('./EmailSettings'));
const PaymentGateways = lazy(() => import('./PaymentGateways'));
const DealReports = lazy(() => import('./DealReports'));
const ProductDetails = lazy(() => import('./ProductDetails'));
const ConnectedApps = lazy(() => import('./ConnectedApps'));
const StaffDirectoryList = lazy(() => import('./StaffDirectoryList'));
const SalesVelocity = lazy(() => import('./SalesVelocity'));
const Sitemap = lazy(() => import('./Sitemap'));
const AutomationLogs = lazy(() => import('./AutomationLogs'));
const ProposalReport = lazy(() => import('./ProposalReport'));
const EmailVerification = lazy(() => import('./EmailVerification'));
const Packages = lazy(() => import('./Packages'));
const Account360 = lazy(() => import('./Account360'));
const EmailCampaignArchieved = lazy(() => import('./EmailCampaignArchieved'));
const UiProgress = lazy(() => import('./UiProgress'));
const SalesTargetsTeamsSettings = lazy(() => import('./SalesTargetsTeamsSettings'));
const UserActivityLogs = lazy(() => import('./UserActivityLogs'));
const ClearCache = lazy(() => import('./ClearCache'));
const ContactReports = lazy(() => import('./ContactReports'));
const Notifications = lazy(() => import('./Notifications'));
const BlogTags = lazy(() => import('./BlogTags'));
const ChartApex = lazy(() => import('./ChartApex'));
const Tickets = lazy(() => import('./Tickets'));
const InvoiceDetails = lazy(() => import('./InvoiceDetails'));
const Companies = lazy(() => import('./Companies'));
const UiCards = lazy(() => import('./UiCards'));
const UiLightbox = lazy(() => import('./UiLightbox'));
const LayoutHidden = lazy(() => import('./LayoutHidden'));
const KanbanView = lazy(() => import('./KanbanView'));
const Leads = lazy(() => import('./Leads'));
const Payments = lazy(() => import('./Payments'));
const GdprCookies = lazy(() => import('./GdprCookies'));
const SalesOrderList = lazy(() => import('./SalesOrderList'));
const AiCommandCenter = lazy(() => import('./AiCommandCenter'));
const SystemBackup = lazy(() => import('./SystemBackup'));
const IconSimpleline = lazy(() => import('./IconSimpleline'));
const LanguageSettings = lazy(() => import('./LanguageSettings'));
const Attendance = lazy(() => import('./Attendance'));
const UiLinks = lazy(() => import('./UiLinks'));
const UiAlerts = lazy(() => import('./UiAlerts'));
const UiCarousel = lazy(() => import('./UiCarousel'));
const ChartFlot = lazy(() => import('./ChartFlot'));
const IconMaterial = lazy(() => import('./IconMaterial'));
const DealsDetails = lazy(() => import('./DealsDetails'));
const EmailCampaignCompleted = lazy(() => import('./EmailCampaignCompleted'));
const DepartmentsList = lazy(() => import('./DepartmentsList'));
const UiDropdowns = lazy(() => import('./UiDropdowns'));
const TenantSupportTickets = lazy(() => import('./TenantSupportTickets'));
const ActivityMail = lazy(() => import('./ActivityMail'));
const Contracts = lazy(() => import('./Contracts'));
const UnderMaintenance = lazy(() => import('./UnderMaintenance'));
const FormSelect = lazy(() => import('./FormSelect'));
const ResetPassword = lazy(() => import('./ResetPassword'));
const EmailCampaign = lazy(() => import('./EmailCampaign'));
const ChartPeity = lazy(() => import('./ChartPeity'));
const EmailMarketing = lazy(() => import('./EmailMarketing'));
const EstimationReport = lazy(() => import('./EstimationReport'));
const TeamPerformanceReport = lazy(() => import('./TeamPerformanceReport'));
const Notes = lazy(() => import('./Notes'));
const BankAccounts = lazy(() => import('./BankAccounts'));
const StaffDirectoryGrid = lazy(() => import('./StaffDirectoryGrid'));
const CallSummary = lazy(() => import('./CallSummary'));
const LanguageWeb = lazy(() => import('./LanguageWeb'));
const CustomFieldsSetting = lazy(() => import('./CustomFieldsSetting'));
const Timesheets = lazy(() => import('./Timesheets'));
const UiButtons = lazy(() => import('./UiButtons'));
const SalesTargetsBreakdownSettings = lazy(() => import('./SalesTargetsBreakdownSettings'));
const NotificationsSettings = lazy(() => import('./NotificationsSettings'));
const Dashboard = lazy(() => import('./Dashboard'));
const Projects = lazy(() => import('./Projects'));
const PurchaseTransaction = lazy(() => import('./PurchaseTransaction'));
const TenantTicketDetails = lazy(() => import('./TenantTicketDetails'));
const BanIpAddress = lazy(() => import('./BanIpAddress'));
const UiScrollbar = lazy(() => import('./UiScrollbar'));
const UiOffcanvas = lazy(() => import('./UiOffcanvas'));
const EmailEngagement = lazy(() => import('./EmailEngagement'));
const DealAgingReport = lazy(() => import('./DealAgingReport'));
const IconBootstrap = lazy(() => import('./IconBootstrap'));
const CampaignComplete = lazy(() => import('./CampaignComplete'));
const ProposalConversionRateReport = lazy(() => import('./ProposalConversionRateReport'));
const DealsList = lazy(() => import('./DealsList'));
const FormCheckboxRadios = lazy(() => import('./FormCheckboxRadios'));
const PrintersSettings = lazy(() => import('./PrintersSettings'));
const LoginHistory = lazy(() => import('./LoginHistory'));
const DiscountRulesSettings = lazy(() => import('./DiscountRulesSettings'));
const InvitationsList = lazy(() => import('./InvitationsList'));
const AppliedDiscountLog = lazy(() => import('./AppliedDiscountLog'));
const UiToasts = lazy(() => import('./UiToasts'));
const FormFileupload = lazy(() => import('./FormFileupload'));
const UserActivityReport = lazy(() => import('./UserActivityReport'));
const SecuritySettings = lazy(() => import('./SecuritySettings'));
const OpportunitiesList = lazy(() => import('./OpportunitiesList'));
const Proposals = lazy(() => import('./Proposals'));
const UserLoginReport = lazy(() => import('./UserLoginReport'));
const Departments = lazy(() => import('./Departments'));
const Countries = lazy(() => import('./Countries'));
const TasksImportant = lazy(() => import('./TasksImportant'));
const ContactStage = lazy(() => import('./ContactStage'));
const States = lazy(() => import('./States'));
const SocialCampaignArchieved = lazy(() => import('./SocialCampaignArchieved'));
const SocialCampaign = lazy(() => import('./SocialCampaign'));
const ChartJs = lazy(() => import('./ChartJs'));
const ProjectDetails = lazy(() => import('./ProjectDetails'));
const WhatsappCampaignArchieved = lazy(() => import('./WhatsappCampaignArchieved'));
const SalesTargetsSettings = lazy(() => import('./SalesTargetsSettings'));
const UiPagination = lazy(() => import('./UiPagination'));
const AiEmailComposer = lazy(() => import('./AiEmailComposer'));
const UiNavTabs = lazy(() => import('./UiNavTabs'));
const BlogDetails = lazy(() => import('./BlogDetails'));
const EmailReply = lazy(() => import('./EmailReply'));
const WorkflowBuilder = lazy(() => import('./WorkflowBuilder'));
const IconTypicon = lazy(() => import('./IconTypicon'));
const AudioCall = lazy(() => import('./AudioCall'));
const UiCollapse = lazy(() => import('./UiCollapse'));
const LeadFunnelReport = lazy(() => import('./LeadFunnelReport'));
const SalesTarget = lazy(() => import('./SalesTarget'));
const FormGridGutters = lazy(() => import('./FormGridGutters'));
const MembershipAddons = lazy(() => import('./MembershipAddons'));
const SalesTargetTeam = lazy(() => import('./SalesTargetTeam'));
const ContactsList = lazy(() => import('./ContactsList'));
const EstimationsList = lazy(() => import('./EstimationsList'));
const LayoutRtl = lazy(() => import('./LayoutRtl'));
const UiBadges = lazy(() => import('./UiBadges'));
const LeadConversionTimeReport = lazy(() => import('./LeadConversionTimeReport'));
const PrefixesSettings = lazy(() => import('./PrefixesSettings'));
const CompanySettings = lazy(() => import('./CompanySettings'));
const LeadsDashboard = lazy(() => import('./LeadsDashboard'));
const ContactMessages = lazy(() => import('./ContactMessages'));
const Milestones = lazy(() => import('./Milestones'));
const TwoStepVerification = lazy(() => import('./TwoStepVerification'));
const ManageUsers = lazy(() => import('./ManageUsers'));
const DeleteRequest = lazy(() => import('./DeleteRequest'));
const QuotationsList = lazy(() => import('./QuotationsList'));
const ContractReport = lazy(() => import('./ContractReport'));
const ContractsList = lazy(() => import('./ContractsList'));
const UiListGroup = lazy(() => import('./UiListGroup'));
const IconWeather = lazy(() => import('./IconWeather'));
const Holidays = lazy(() => import('./Holidays'));
const DeviceManagement = lazy(() => import('./DeviceManagement'));
const InvoiceList = lazy(() => import('./InvoiceList'));
const CompanyDetails = lazy(() => import('./CompanyDetails'));
const ComingSoon = lazy(() => import('./ComingSoon'));
const ScheduledReports = lazy(() => import('./ScheduledReports'));
const TaxRates = lazy(() => import('./TaxRates'));
const SystemUpdate = lazy(() => import('./SystemUpdate'));
const WhatsappCampaignCompleted = lazy(() => import('./WhatsappCampaignCompleted'));
const ActivityTask = lazy(() => import('./ActivityTask'));
const TablesBasic = lazy(() => import('./TablesBasic'));
const Cronjob = lazy(() => import('./Cronjob'));
const SocialCampaignCompleted = lazy(() => import('./SocialCampaignCompleted'));
const FormFloatingLabels = lazy(() => import('./FormFloatingLabels'));
const UiGrid = lazy(() => import('./UiGrid'));
const TaskReports = lazy(() => import('./TaskReports'));
const CampaignArchieve = lazy(() => import('./CampaignArchieve'));
const Analytics = lazy(() => import('./Analytics'));
const UiAccordion = lazy(() => import('./UiAccordion'));
const AddBlog = lazy(() => import('./AddBlog'));
const UiAvatar = lazy(() => import('./UiAvatar'));
const ContractRenewalExpiryReport = lazy(() => import('./ContractRenewalExpiryReport'));
const Company = lazy(() => import('./Company'));
const LayoutHoverview = lazy(() => import('./LayoutHoverview'));
const Invoices = lazy(() => import('./Invoices'));
const AddPage = lazy(() => import('./AddPage'));
const LostDealAnalysisReport = lazy(() => import('./LostDealAnalysisReport'));
const RevenueReport = lazy(() => import('./RevenueReport'));
const DealsDashboard = lazy(() => import('./DealsDashboard'));
const SalesForecasting = lazy(() => import('./SalesForecasting'));
const BlogComments = lazy(() => import('./BlogComments'));
const UiUtilities = lazy(() => import('./UiUtilities'));
const SmsGateways = lazy(() => import('./SmsGateways'));
const ContactDetails = lazy(() => import('./ContactDetails'));
const LostReason = lazy(() => import('./LostReason'));
const GrowthDashboard = lazy(() => import('./GrowthDashboard'));
const UiTooltips = lazy(() => import('./UiTooltips'));
const IconFontawesome = lazy(() => import('./IconFontawesome'));
const UiSweetalerts = lazy(() => import('./UiSweetalerts'));
const FormEditors = lazy(() => import('./FormEditors'));
const ChartC3 = lazy(() => import('./ChartC3'));
const TenantUsageMetrics = lazy(() => import('./TenantUsageMetrics'));
const IconThemify = lazy(() => import('./IconThemify'));
const LayoutMini = lazy(() => import('./LayoutMini'));
const PreferenceSettings = lazy(() => import('./PreferenceSettings'));
const TodoList = lazy(() => import('./TodoList'));
const UiSpinner = lazy(() => import('./UiSpinner'));
const RevenueSummaryDashboard = lazy(() => import('./RevenueSummaryDashboard'));
const TeamsList = lazy(() => import('./TeamsList'));
const FormBasicInputs = lazy(() => import('./FormBasicInputs'));
const Webhooks = lazy(() => import('./Webhooks'));
const TasksCompleted = lazy(() => import('./TasksCompleted'));
const UiClipboard = lazy(() => import('./UiClipboard'));
const ActivityMeeting = lazy(() => import('./ActivityMeeting'));
const IconRemix = lazy(() => import('./IconRemix'));
const EditInvoices = lazy(() => import('./EditInvoices'));
const Subscription = lazy(() => import('./Subscription'));
const IconFeather = lazy(() => import('./IconFeather'));
const LocalizationSettings = lazy(() => import('./LocalizationSettings'));
const Todo = lazy(() => import('./Todo'));
const ImportWizard = lazy(() => import('./ImportWizard'));
const FileManager = lazy(() => import('./FileManager'));
const SmsCampaign = lazy(() => import('./SmsCampaign'));
const UiPopovers = lazy(() => import('./UiPopovers'));
const UiRatio = lazy(() => import('./UiRatio'));
const IconTabler = lazy(() => import('./IconTabler'));
const BlankPage = lazy(() => import('./BlankPage'));
const UiPlaceholders = lazy(() => import('./UiPlaceholders'));
const RolesPermissions = lazy(() => import('./RolesPermissions'));
const Faq = lazy(() => import('./Faq'));
const AppearanceSettings = lazy(() => import('./AppearanceSettings'));
const TicketDetails = lazy(() => import('./TicketDetails'));
const UiButtonsGroup = lazy(() => import('./UiButtonsGroup'));
const Industry = lazy(() => import('./Industry'));
const DataTables = lazy(() => import('./DataTables'));
const LeadAgingReport = lazy(() => import('./LeadAgingReport'));
const ProjectDashboard = lazy(() => import('./ProjectDashboard'));
const Blogs = lazy(() => import('./Blogs'));
const FormWizard = lazy(() => import('./FormWizard'));
const Sources = lazy(() => import('./Sources'));
const ChartMorris = lazy(() => import('./ChartMorris'));
const IconFlag = lazy(() => import('./IconFlag'));
const ExecutiveDashboard = lazy(() => import('./ExecutiveDashboard'));
const ActivityCalls = lazy(() => import('./ActivityCalls'));
const MembershipPlans = lazy(() => import('./MembershipPlans'));
const DealConversionReport = lazy(() => import('./DealConversionReport'));
const Chat = lazy(() => import('./Chat'));
const ProfileSettings = lazy(() => import('./ProfileSettings'));
const Domain = lazy(() => import('./Domain'));
const InvoicesDetails = lazy(() => import('./InvoicesDetails'));
const LeadReports = lazy(() => import('./LeadReports'));
const Campaign = lazy(() => import('./Campaign'));
const LayoutFullwidth = lazy(() => import('./LayoutFullwidth'));
const ReportBuilder = lazy(() => import('./ReportBuilder'));

const GeneratedRoutes = () => {
    return (
        <Suspense fallback={<div className="d-flex justify-content-center align-items-center h-100"><div className="spinner-border text-primary" role="status"></div></div>}>
            <Routes>
                <Route path="/form-mask" element={<FormMask />} />
                <Route path="/form-mask.html" element={<FormMask />} />
                <Route path="/sms-campaign-completed" element={<SmsCampaignCompleted />} />
                <Route path="/sms-campaign-completed.html" element={<SmsCampaignCompleted />} />
                <Route path="/tenant-support-tickets-grid" element={<TenantSupportTicketsGrid />} />
                <Route path="/tenant-support-tickets-grid.html" element={<TenantSupportTicketsGrid />} />
                <Route path="/leads-list" element={<LeadsList />} />
                <Route path="/leads-list.html" element={<LeadsList />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contacts.html" element={<Contacts />} />
                <Route path="/ui-dragula" element={<UiDragula />} />
                <Route path="/ui-dragula.html" element={<UiDragula />} />
                <Route path="/leads-details" element={<LeadsDetails />} />
                <Route path="/leads-details.html" element={<LeadsDetails />} />
                <Route path="/leave-requests" element={<LeaveRequests />} />
                <Route path="/leave-requests.html" element={<LeaveRequests />} />
                <Route path="/sales-rep-comparison-report" element={<SalesRepComparisonReport />} />
                <Route path="/sales-rep-comparison-report.html" element={<SalesRepComparisonReport />} />
                <Route path="/project-reports" element={<ProjectReports />} />
                <Route path="/project-reports.html" element={<ProjectReports />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/cities.html" element={<Cities />} />
                <Route path="/social-feed" element={<SocialFeed />} />
                <Route path="/social-feed.html" element={<SocialFeed />} />
                <Route path="/form-pickers" element={<FormPickers />} />
                <Route path="/form-pickers.html" element={<FormPickers />} />
                <Route path="/attendance-summary-report" element={<AttendanceSummaryReport />} />
                <Route path="/attendance-summary-report.html" element={<AttendanceSummaryReport />} />
                <Route path="/calls" element={<Calls />} />
                <Route path="/calls.html" element={<Calls />} />
                <Route path="/whatsapp-campaign" element={<WhatsappCampaign />} />
                <Route path="/whatsapp-campaign.html" element={<WhatsappCampaign />} />
                <Route path="/sales-dashboard" element={<SalesDashboard />} />
                <Route path="/sales-dashboard.html" element={<SalesDashboard />} />
                <Route path="/call-history" element={<CallHistory />} />
                <Route path="/call-history.html" element={<CallHistory />} />
                <Route path="/pipeline" element={<Pipeline />} />
                <Route path="/pipeline.html" element={<Pipeline />} />
                <Route path="/relationship-map" element={<RelationshipMap />} />
                <Route path="/relationship-map.html" element={<RelationshipMap />} />
                <Route path="/proposals-list" element={<ProposalsList />} />
                <Route path="/proposals-list.html" element={<ProposalsList />} />
                <Route path="/membership-transactions" element={<MembershipTransactions />} />
                <Route path="/membership-transactions.html" element={<MembershipTransactions />} />
                <Route path="/ui-images" element={<UiImages />} />
                <Route path="/ui-images.html" element={<UiImages />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/activities.html" element={<Activities />} />
                <Route path="/pipeline-stage-report" element={<PipelineStageReport />} />
                <Route path="/pipeline-stage-report.html" element={<PipelineStageReport />} />
                <Route path="/invoice-settings" element={<InvoiceSettings />} />
                <Route path="/invoice-settings.html" element={<InvoiceSettings />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/pages.html" element={<Pages />} />
                <Route path="/form-vertical" element={<FormVertical />} />
                <Route path="/form-vertical.html" element={<FormVertical />} />
                <Route path="/ui-breadcrumb" element={<UiBreadcrumb />} />
                <Route path="/ui-breadcrumb.html" element={<UiBreadcrumb />} />
                <Route path="/layout-dark" element={<LayoutDark />} />
                <Route path="/layout-dark.html" element={<LayoutDark />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/storage.html" element={<Storage />} />
                <Route path="/add-invoices" element={<AddInvoices />} />
                <Route path="/add-invoices.html" element={<AddInvoices />} />
                <Route path="/automation-rules" element={<AutomationRules />} />
                <Route path="/automation-rules.html" element={<AutomationRules />} />
                <Route path="/estimations" element={<Estimations />} />
                <Route path="/estimations.html" element={<Estimations />} />
                <Route path="/deal-risk-analysis" element={<DealRiskAnalysis />} />
                <Route path="/deal-risk-analysis.html" element={<DealRiskAnalysis />} />
                <Route path="/win-loss-analysis" element={<WinLossAnalysis />} />
                <Route path="/win-loss-analysis.html" element={<WinLossAnalysis />} />
                <Route path="/projects-list" element={<ProjectsList />} />
                <Route path="/projects-list.html" element={<ProjectsList />} />
                <Route path="/lock-screen" element={<LockScreen />} />
                <Route path="/lock-screen.html" element={<LockScreen />} />
                <Route path="/blog-categories" element={<BlogCategories />} />
                <Route path="/blog-categories.html" element={<BlogCategories />} />
                <Route path="/index" element={<Index />} />
                <Route path="/index.html" element={<Index />} />
                <Route path="/database-backup" element={<DatabaseBackup />} />
                <Route path="/database-backup.html" element={<DatabaseBackup />} />
                <Route path="/company-reports" element={<CompanyReports />} />
                <Route path="/company-reports.html" element={<CompanyReports />} />
                <Route path="/ai-settings" element={<AiSettings />} />
                <Route path="/ai-settings.html" element={<AiSettings />} />
                <Route path="/ai-insights" element={<AiInsights />} />
                <Route path="/ai-insights.html" element={<AiInsights />} />
                <Route path="/form-input-groups" element={<FormInputGroups />} />
                <Route path="/form-input-groups.html" element={<FormInputGroups />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar.html" element={<Calendar />} />
                <Route path="/sms-campaign-archieved" element={<SmsCampaignArchieved />} />
                <Route path="/sms-campaign-archieved.html" element={<SmsCampaignArchieved />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks.html" element={<Tasks />} />
                <Route path="/form-validation" element={<FormValidation />} />
                <Route path="/form-validation.html" element={<FormValidation />} />
                <Route path="/ui-typography" element={<UiTypography />} />
                <Route path="/ui-typography.html" element={<UiTypography />} />
                <Route path="/icon-pe7" element={<IconPe7 />} />
                <Route path="/icon-pe7.html" element={<IconPe7 />} />
                <Route path="/companies-list" element={<CompaniesList />} />
                <Route path="/companies-list.html" element={<CompaniesList />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/forgot-password.html" element={<ForgotPassword />} />
                <Route path="/icon-ionic" element={<IconIonic />} />
                <Route path="/icon-ionic.html" element={<IconIonic />} />
                <Route path="/video-call" element={<VideoCall />} />
                <Route path="/video-call.html" element={<VideoCall />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/testimonials.html" element={<Testimonials />} />
                <Route path="/ui-modals" element={<UiModals />} />
                <Route path="/ui-modals.html" element={<UiModals />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/deals.html" element={<Deals />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/invoice.html" element={<Invoice />} />
                <Route path="/edit-blog" element={<EditBlog />} />
                <Route path="/edit-blog.html" element={<EditBlog />} />
                <Route path="/form-horizontal" element={<FormHorizontal />} />
                <Route path="/form-horizontal.html" element={<FormHorizontal />} />
                <Route path="/currencies" element={<Currencies />} />
                <Route path="/currencies.html" element={<Currencies />} />
                <Route path="/ask-your-data" element={<AskYourData />} />
                <Route path="/ask-your-data.html" element={<AskYourData />} />
                <Route path="/ai-lead-scoring" element={<AiLeadScoring />} />
                <Route path="/ai-lead-scoring.html" element={<AiLeadScoring />} />
                <Route path="/email" element={<Email />} />
                <Route path="/email.html" element={<Email />} />
                <Route path="/leave-balance-summary-report" element={<LeaveBalanceSummaryReport />} />
                <Route path="/leave-balance-summary-report.html" element={<LeaveBalanceSummaryReport />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products.html" element={<Products />} />
                <Route path="/email-settings" element={<EmailSettings />} />
                <Route path="/email-settings.html" element={<EmailSettings />} />
                <Route path="/payment-gateways" element={<PaymentGateways />} />
                <Route path="/payment-gateways.html" element={<PaymentGateways />} />
                <Route path="/deal-reports" element={<DealReports />} />
                <Route path="/deal-reports.html" element={<DealReports />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/product-details.html" element={<ProductDetails />} />
                <Route path="/connected-apps" element={<ConnectedApps />} />
                <Route path="/connected-apps.html" element={<ConnectedApps />} />
                <Route path="/staff-directory-list" element={<StaffDirectoryList />} />
                <Route path="/staff-directory-list.html" element={<StaffDirectoryList />} />
                <Route path="/sales-velocity" element={<SalesVelocity />} />
                <Route path="/sales-velocity.html" element={<SalesVelocity />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/sitemap.html" element={<Sitemap />} />
                <Route path="/automation-logs" element={<AutomationLogs />} />
                <Route path="/automation-logs.html" element={<AutomationLogs />} />
                <Route path="/proposal-report" element={<ProposalReport />} />
                <Route path="/proposal-report.html" element={<ProposalReport />} />
                <Route path="/email-verification" element={<EmailVerification />} />
                <Route path="/email-verification.html" element={<EmailVerification />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages.html" element={<Packages />} />
                <Route path="/account-360" element={<Account360 />} />
                <Route path="/account-360.html" element={<Account360 />} />
                <Route path="/email-campaign-archieved" element={<EmailCampaignArchieved />} />
                <Route path="/email-campaign-archieved.html" element={<EmailCampaignArchieved />} />
                <Route path="/ui-progress" element={<UiProgress />} />
                <Route path="/ui-progress.html" element={<UiProgress />} />
                <Route path="/sales-targets-teams-settings" element={<SalesTargetsTeamsSettings />} />
                <Route path="/sales-targets-teams-settings.html" element={<SalesTargetsTeamsSettings />} />
                <Route path="/user-activity-logs" element={<UserActivityLogs />} />
                <Route path="/user-activity-logs.html" element={<UserActivityLogs />} />
                <Route path="/clear-cache" element={<ClearCache />} />
                <Route path="/clear-cache.html" element={<ClearCache />} />
                <Route path="/contact-reports" element={<ContactReports />} />
                <Route path="/contact-reports.html" element={<ContactReports />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/notifications.html" element={<Notifications />} />
                <Route path="/blog-tags" element={<BlogTags />} />
                <Route path="/blog-tags.html" element={<BlogTags />} />
                <Route path="/chart-apex" element={<ChartApex />} />
                <Route path="/chart-apex.html" element={<ChartApex />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/tickets.html" element={<Tickets />} />
                <Route path="/invoice-details" element={<InvoiceDetails />} />
                <Route path="/invoice-details.html" element={<InvoiceDetails />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/companies.html" element={<Companies />} />
                <Route path="/ui-cards" element={<UiCards />} />
                <Route path="/ui-cards.html" element={<UiCards />} />
                <Route path="/ui-lightbox" element={<UiLightbox />} />
                <Route path="/ui-lightbox.html" element={<UiLightbox />} />
                <Route path="/layout-hidden" element={<LayoutHidden />} />
                <Route path="/layout-hidden.html" element={<LayoutHidden />} />
                <Route path="/kanban-view" element={<KanbanView />} />
                <Route path="/kanban-view.html" element={<KanbanView />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/leads.html" element={<Leads />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/payments.html" element={<Payments />} />
                <Route path="/gdpr-cookies" element={<GdprCookies />} />
                <Route path="/gdpr-cookies.html" element={<GdprCookies />} />
                <Route path="/sales-order-list" element={<SalesOrderList />} />
                <Route path="/sales-order-list.html" element={<SalesOrderList />} />
                <Route path="/ai-command-center" element={<AiCommandCenter />} />
                <Route path="/ai-command-center.html" element={<AiCommandCenter />} />
                <Route path="/system-backup" element={<SystemBackup />} />
                <Route path="/system-backup.html" element={<SystemBackup />} />
                <Route path="/icon-simpleline" element={<IconSimpleline />} />
                <Route path="/icon-simpleline.html" element={<IconSimpleline />} />
                <Route path="/language-settings" element={<LanguageSettings />} />
                <Route path="/language-settings.html" element={<LanguageSettings />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/attendance.html" element={<Attendance />} />
                <Route path="/ui-links" element={<UiLinks />} />
                <Route path="/ui-links.html" element={<UiLinks />} />
                <Route path="/ui-alerts" element={<UiAlerts />} />
                <Route path="/ui-alerts.html" element={<UiAlerts />} />
                <Route path="/ui-carousel" element={<UiCarousel />} />
                <Route path="/ui-carousel.html" element={<UiCarousel />} />
                <Route path="/chart-flot" element={<ChartFlot />} />
                <Route path="/chart-flot.html" element={<ChartFlot />} />
                <Route path="/icon-material" element={<IconMaterial />} />
                <Route path="/icon-material.html" element={<IconMaterial />} />
                <Route path="/deals-details" element={<DealsDetails />} />
                <Route path="/deals-details.html" element={<DealsDetails />} />
                <Route path="/email-campaign-completed" element={<EmailCampaignCompleted />} />
                <Route path="/email-campaign-completed.html" element={<EmailCampaignCompleted />} />
                <Route path="/departments-list" element={<DepartmentsList />} />
                <Route path="/departments-list.html" element={<DepartmentsList />} />
                <Route path="/ui-dropdowns" element={<UiDropdowns />} />
                <Route path="/ui-dropdowns.html" element={<UiDropdowns />} />
                <Route path="/tenant-support-tickets" element={<TenantSupportTickets />} />
                <Route path="/tenant-support-tickets.html" element={<TenantSupportTickets />} />
                <Route path="/activity-mail" element={<ActivityMail />} />
                <Route path="/activity-mail.html" element={<ActivityMail />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/contracts.html" element={<Contracts />} />
                <Route path="/under-maintenance" element={<UnderMaintenance />} />
                <Route path="/under-maintenance.html" element={<UnderMaintenance />} />
                <Route path="/form-select" element={<FormSelect />} />
                <Route path="/form-select.html" element={<FormSelect />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/reset-password.html" element={<ResetPassword />} />
                <Route path="/email-campaign" element={<EmailCampaign />} />
                <Route path="/email-campaign.html" element={<EmailCampaign />} />
                <Route path="/chart-peity" element={<ChartPeity />} />
                <Route path="/chart-peity.html" element={<ChartPeity />} />
                <Route path="/email-marketing" element={<EmailMarketing />} />
                <Route path="/email-marketing.html" element={<EmailMarketing />} />
                <Route path="/estimation-report" element={<EstimationReport />} />
                <Route path="/estimation-report.html" element={<EstimationReport />} />
                <Route path="/team-performance-report" element={<TeamPerformanceReport />} />
                <Route path="/team-performance-report.html" element={<TeamPerformanceReport />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/notes.html" element={<Notes />} />
                <Route path="/bank-accounts" element={<BankAccounts />} />
                <Route path="/bank-accounts.html" element={<BankAccounts />} />
                <Route path="/staff-directory-grid" element={<StaffDirectoryGrid />} />
                <Route path="/staff-directory-grid.html" element={<StaffDirectoryGrid />} />
                <Route path="/call-summary" element={<CallSummary />} />
                <Route path="/call-summary.html" element={<CallSummary />} />
                <Route path="/language-web" element={<LanguageWeb />} />
                <Route path="/language-web.html" element={<LanguageWeb />} />
                <Route path="/custom-fields-setting" element={<CustomFieldsSetting />} />
                <Route path="/custom-fields-setting.html" element={<CustomFieldsSetting />} />
                <Route path="/timesheets" element={<Timesheets />} />
                <Route path="/timesheets.html" element={<Timesheets />} />
                <Route path="/ui-buttons" element={<UiButtons />} />
                <Route path="/ui-buttons.html" element={<UiButtons />} />
                <Route path="/sales-targets-breakdown-settings" element={<SalesTargetsBreakdownSettings />} />
                <Route path="/sales-targets-breakdown-settings.html" element={<SalesTargetsBreakdownSettings />} />
                <Route path="/notifications-settings" element={<NotificationsSettings />} />
                <Route path="/notifications-settings.html" element={<NotificationsSettings />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard.html" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects.html" element={<Projects />} />
                <Route path="/purchase-transaction" element={<PurchaseTransaction />} />
                <Route path="/purchase-transaction.html" element={<PurchaseTransaction />} />
                <Route path="/tenant-ticket-details" element={<TenantTicketDetails />} />
                <Route path="/tenant-ticket-details.html" element={<TenantTicketDetails />} />
                <Route path="/ban-ip-address" element={<BanIpAddress />} />
                <Route path="/ban-ip-address.html" element={<BanIpAddress />} />
                <Route path="/ui-scrollbar" element={<UiScrollbar />} />
                <Route path="/ui-scrollbar.html" element={<UiScrollbar />} />
                <Route path="/ui-offcanvas" element={<UiOffcanvas />} />
                <Route path="/ui-offcanvas.html" element={<UiOffcanvas />} />
                <Route path="/email-engagement" element={<EmailEngagement />} />
                <Route path="/email-engagement.html" element={<EmailEngagement />} />
                <Route path="/deal-aging-report" element={<DealAgingReport />} />
                <Route path="/deal-aging-report.html" element={<DealAgingReport />} />
                <Route path="/icon-bootstrap" element={<IconBootstrap />} />
                <Route path="/icon-bootstrap.html" element={<IconBootstrap />} />
                <Route path="/campaign-complete" element={<CampaignComplete />} />
                <Route path="/campaign-complete.html" element={<CampaignComplete />} />
                <Route path="/proposal-conversion-rate-report" element={<ProposalConversionRateReport />} />
                <Route path="/proposal-conversion-rate-report.html" element={<ProposalConversionRateReport />} />
                <Route path="/deals-list" element={<DealsList />} />
                <Route path="/deals-list.html" element={<DealsList />} />
                <Route path="/form-checkbox-radios" element={<FormCheckboxRadios />} />
                <Route path="/form-checkbox-radios.html" element={<FormCheckboxRadios />} />
                <Route path="/printers-settings" element={<PrintersSettings />} />
                <Route path="/printers-settings.html" element={<PrintersSettings />} />
                <Route path="/login-history" element={<LoginHistory />} />
                <Route path="/login-history.html" element={<LoginHistory />} />
                <Route path="/discount-rules-settings" element={<DiscountRulesSettings />} />
                <Route path="/discount-rules-settings.html" element={<DiscountRulesSettings />} />
                <Route path="/invitations-list" element={<InvitationsList />} />
                <Route path="/invitations-list.html" element={<InvitationsList />} />
                <Route path="/applied-discount-log" element={<AppliedDiscountLog />} />
                <Route path="/applied-discount-log.html" element={<AppliedDiscountLog />} />
                <Route path="/ui-toasts" element={<UiToasts />} />
                <Route path="/ui-toasts.html" element={<UiToasts />} />
                <Route path="/form-fileupload" element={<FormFileupload />} />
                <Route path="/form-fileupload.html" element={<FormFileupload />} />
                <Route path="/user-activity-report" element={<UserActivityReport />} />
                <Route path="/user-activity-report.html" element={<UserActivityReport />} />
                <Route path="/security-settings" element={<SecuritySettings />} />
                <Route path="/security-settings.html" element={<SecuritySettings />} />
                <Route path="/opportunities-list" element={<OpportunitiesList />} />
                <Route path="/opportunities-list.html" element={<OpportunitiesList />} />
                <Route path="/proposals" element={<Proposals />} />
                <Route path="/proposals.html" element={<Proposals />} />
                <Route path="/user-login-report" element={<UserLoginReport />} />
                <Route path="/user-login-report.html" element={<UserLoginReport />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/departments.html" element={<Departments />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/countries.html" element={<Countries />} />
                <Route path="/tasks-important" element={<TasksImportant />} />
                <Route path="/tasks-important.html" element={<TasksImportant />} />
                <Route path="/contact-stage" element={<ContactStage />} />
                <Route path="/contact-stage.html" element={<ContactStage />} />
                <Route path="/states" element={<States />} />
                <Route path="/states.html" element={<States />} />
                <Route path="/social-campaign-archieved" element={<SocialCampaignArchieved />} />
                <Route path="/social-campaign-archieved.html" element={<SocialCampaignArchieved />} />
                <Route path="/social-campaign" element={<SocialCampaign />} />
                <Route path="/social-campaign.html" element={<SocialCampaign />} />
                <Route path="/chart-js" element={<ChartJs />} />
                <Route path="/chart-js.html" element={<ChartJs />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/project-details.html" element={<ProjectDetails />} />
                <Route path="/whatsapp-campaign-archieved" element={<WhatsappCampaignArchieved />} />
                <Route path="/whatsapp-campaign-archieved.html" element={<WhatsappCampaignArchieved />} />
                <Route path="/sales-targets-settings" element={<SalesTargetsSettings />} />
                <Route path="/sales-targets-settings.html" element={<SalesTargetsSettings />} />
                <Route path="/ui-pagination" element={<UiPagination />} />
                <Route path="/ui-pagination.html" element={<UiPagination />} />
                <Route path="/ai-email-composer" element={<AiEmailComposer />} />
                <Route path="/ai-email-composer.html" element={<AiEmailComposer />} />
                <Route path="/ui-nav-tabs" element={<UiNavTabs />} />
                <Route path="/ui-nav-tabs.html" element={<UiNavTabs />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/blog-details.html" element={<BlogDetails />} />
                <Route path="/email-reply" element={<EmailReply />} />
                <Route path="/email-reply.html" element={<EmailReply />} />
                <Route path="/workflow-builder" element={<WorkflowBuilder />} />
                <Route path="/workflow-builder.html" element={<WorkflowBuilder />} />
                <Route path="/icon-typicon" element={<IconTypicon />} />
                <Route path="/icon-typicon.html" element={<IconTypicon />} />
                <Route path="/audio-call" element={<AudioCall />} />
                <Route path="/audio-call.html" element={<AudioCall />} />
                <Route path="/ui-collapse" element={<UiCollapse />} />
                <Route path="/ui-collapse.html" element={<UiCollapse />} />
                <Route path="/lead-funnel-report" element={<LeadFunnelReport />} />
                <Route path="/lead-funnel-report.html" element={<LeadFunnelReport />} />
                <Route path="/sales-target" element={<SalesTarget />} />
                <Route path="/sales-target.html" element={<SalesTarget />} />
                <Route path="/form-grid-gutters" element={<FormGridGutters />} />
                <Route path="/form-grid-gutters.html" element={<FormGridGutters />} />
                <Route path="/membership-addons" element={<MembershipAddons />} />
                <Route path="/membership-addons.html" element={<MembershipAddons />} />
                <Route path="/sales-target-team" element={<SalesTargetTeam />} />
                <Route path="/sales-target-team.html" element={<SalesTargetTeam />} />
                <Route path="/contacts-list" element={<ContactsList />} />
                <Route path="/contacts-list.html" element={<ContactsList />} />
                <Route path="/estimations-list" element={<EstimationsList />} />
                <Route path="/estimations-list.html" element={<EstimationsList />} />
                <Route path="/layout-rtl" element={<LayoutRtl />} />
                <Route path="/layout-rtl.html" element={<LayoutRtl />} />
                <Route path="/ui-badges" element={<UiBadges />} />
                <Route path="/ui-badges.html" element={<UiBadges />} />
                <Route path="/lead-conversion-time-report" element={<LeadConversionTimeReport />} />
                <Route path="/lead-conversion-time-report.html" element={<LeadConversionTimeReport />} />
                <Route path="/prefixes-settings" element={<PrefixesSettings />} />
                <Route path="/prefixes-settings.html" element={<PrefixesSettings />} />
                <Route path="/company-settings" element={<CompanySettings />} />
                <Route path="/company-settings.html" element={<CompanySettings />} />
                <Route path="/leads-dashboard" element={<LeadsDashboard />} />
                <Route path="/leads-dashboard.html" element={<LeadsDashboard />} />
                <Route path="/contact-messages" element={<ContactMessages />} />
                <Route path="/contact-messages.html" element={<ContactMessages />} />
                <Route path="/milestones" element={<Milestones />} />
                <Route path="/milestones.html" element={<Milestones />} />
                <Route path="/two-step-verification" element={<TwoStepVerification />} />
                <Route path="/two-step-verification.html" element={<TwoStepVerification />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                <Route path="/manage-users.html" element={<ManageUsers />} />
                <Route path="/delete-request" element={<DeleteRequest />} />
                <Route path="/delete-request.html" element={<DeleteRequest />} />
                <Route path="/quotations-list" element={<QuotationsList />} />
                <Route path="/quotations-list.html" element={<QuotationsList />} />
                <Route path="/contract-report" element={<ContractReport />} />
                <Route path="/contract-report.html" element={<ContractReport />} />
                <Route path="/contracts-list" element={<ContractsList />} />
                <Route path="/contracts-list.html" element={<ContractsList />} />
                <Route path="/ui-list-group" element={<UiListGroup />} />
                <Route path="/ui-list-group.html" element={<UiListGroup />} />
                <Route path="/icon-weather" element={<IconWeather />} />
                <Route path="/icon-weather.html" element={<IconWeather />} />
                <Route path="/holidays" element={<Holidays />} />
                <Route path="/holidays.html" element={<Holidays />} />
                <Route path="/device-management" element={<DeviceManagement />} />
                <Route path="/device-management.html" element={<DeviceManagement />} />
                <Route path="/invoice-list" element={<InvoiceList />} />
                <Route path="/invoice-list.html" element={<InvoiceList />} />
                <Route path="/company-details" element={<CompanyDetails />} />
                <Route path="/company-details.html" element={<CompanyDetails />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/coming-soon.html" element={<ComingSoon />} />
                <Route path="/scheduled-reports" element={<ScheduledReports />} />
                <Route path="/scheduled-reports.html" element={<ScheduledReports />} />
                <Route path="/tax-rates" element={<TaxRates />} />
                <Route path="/tax-rates.html" element={<TaxRates />} />
                <Route path="/system-update" element={<SystemUpdate />} />
                <Route path="/system-update.html" element={<SystemUpdate />} />
                <Route path="/whatsapp-campaign-completed" element={<WhatsappCampaignCompleted />} />
                <Route path="/whatsapp-campaign-completed.html" element={<WhatsappCampaignCompleted />} />
                <Route path="/activity-task" element={<ActivityTask />} />
                <Route path="/activity-task.html" element={<ActivityTask />} />
                <Route path="/tables-basic" element={<TablesBasic />} />
                <Route path="/tables-basic.html" element={<TablesBasic />} />
                <Route path="/cronjob" element={<Cronjob />} />
                <Route path="/cronjob.html" element={<Cronjob />} />
                <Route path="/social-campaign-completed" element={<SocialCampaignCompleted />} />
                <Route path="/social-campaign-completed.html" element={<SocialCampaignCompleted />} />
                <Route path="/form-floating-labels" element={<FormFloatingLabels />} />
                <Route path="/form-floating-labels.html" element={<FormFloatingLabels />} />
                <Route path="/ui-grid" element={<UiGrid />} />
                <Route path="/ui-grid.html" element={<UiGrid />} />
                <Route path="/task-reports" element={<TaskReports />} />
                <Route path="/task-reports.html" element={<TaskReports />} />
                <Route path="/campaign-archieve" element={<CampaignArchieve />} />
                <Route path="/campaign-archieve.html" element={<CampaignArchieve />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/analytics.html" element={<Analytics />} />
                <Route path="/ui-accordion" element={<UiAccordion />} />
                <Route path="/ui-accordion.html" element={<UiAccordion />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="/add-blog.html" element={<AddBlog />} />
                <Route path="/ui-avatar" element={<UiAvatar />} />
                <Route path="/ui-avatar.html" element={<UiAvatar />} />
                <Route path="/contract-renewal-expiry-report" element={<ContractRenewalExpiryReport />} />
                <Route path="/contract-renewal-expiry-report.html" element={<ContractRenewalExpiryReport />} />
                <Route path="/company" element={<Company />} />
                <Route path="/company.html" element={<Company />} />
                <Route path="/layout-hoverview" element={<LayoutHoverview />} />
                <Route path="/layout-hoverview.html" element={<LayoutHoverview />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoices.html" element={<Invoices />} />
                <Route path="/add-page" element={<AddPage />} />
                <Route path="/add-page.html" element={<AddPage />} />
                <Route path="/lost-deal-analysis-report" element={<LostDealAnalysisReport />} />
                <Route path="/lost-deal-analysis-report.html" element={<LostDealAnalysisReport />} />
                <Route path="/revenue-report" element={<RevenueReport />} />
                <Route path="/revenue-report.html" element={<RevenueReport />} />
                <Route path="/deals-dashboard" element={<DealsDashboard />} />
                <Route path="/deals-dashboard.html" element={<DealsDashboard />} />
                <Route path="/sales-forecasting" element={<SalesForecasting />} />
                <Route path="/sales-forecasting.html" element={<SalesForecasting />} />
                <Route path="/blog-comments" element={<BlogComments />} />
                <Route path="/blog-comments.html" element={<BlogComments />} />
                <Route path="/ui-utilities" element={<UiUtilities />} />
                <Route path="/ui-utilities.html" element={<UiUtilities />} />
                <Route path="/sms-gateways" element={<SmsGateways />} />
                <Route path="/sms-gateways.html" element={<SmsGateways />} />
                <Route path="/contact-details" element={<ContactDetails />} />
                <Route path="/contact-details.html" element={<ContactDetails />} />
                <Route path="/lost-reason" element={<LostReason />} />
                <Route path="/lost-reason.html" element={<LostReason />} />
                <Route path="/growth-dashboard" element={<GrowthDashboard />} />
                <Route path="/growth-dashboard.html" element={<GrowthDashboard />} />
                <Route path="/ui-tooltips" element={<UiTooltips />} />
                <Route path="/ui-tooltips.html" element={<UiTooltips />} />
                <Route path="/icon-fontawesome" element={<IconFontawesome />} />
                <Route path="/icon-fontawesome.html" element={<IconFontawesome />} />
                <Route path="/ui-sweetalerts" element={<UiSweetalerts />} />
                <Route path="/ui-sweetalerts.html" element={<UiSweetalerts />} />
                <Route path="/form-editors" element={<FormEditors />} />
                <Route path="/form-editors.html" element={<FormEditors />} />
                <Route path="/chart-c3" element={<ChartC3 />} />
                <Route path="/chart-c3.html" element={<ChartC3 />} />
                <Route path="/tenant-usage-metrics" element={<TenantUsageMetrics />} />
                <Route path="/tenant-usage-metrics.html" element={<TenantUsageMetrics />} />
                <Route path="/icon-themify" element={<IconThemify />} />
                <Route path="/icon-themify.html" element={<IconThemify />} />
                <Route path="/layout-mini" element={<LayoutMini />} />
                <Route path="/layout-mini.html" element={<LayoutMini />} />
                <Route path="/preference-settings" element={<PreferenceSettings />} />
                <Route path="/preference-settings.html" element={<PreferenceSettings />} />
                <Route path="/todo-list" element={<TodoList />} />
                <Route path="/todo-list.html" element={<TodoList />} />
                <Route path="/ui-spinner" element={<UiSpinner />} />
                <Route path="/ui-spinner.html" element={<UiSpinner />} />
                <Route path="/revenue-summary-dashboard" element={<RevenueSummaryDashboard />} />
                <Route path="/revenue-summary-dashboard.html" element={<RevenueSummaryDashboard />} />
                <Route path="/teams-list" element={<TeamsList />} />
                <Route path="/teams-list.html" element={<TeamsList />} />
                <Route path="/form-basic-inputs" element={<FormBasicInputs />} />
                <Route path="/form-basic-inputs.html" element={<FormBasicInputs />} />
                <Route path="/webhooks" element={<Webhooks />} />
                <Route path="/webhooks.html" element={<Webhooks />} />
                <Route path="/tasks-completed" element={<TasksCompleted />} />
                <Route path="/tasks-completed.html" element={<TasksCompleted />} />
                <Route path="/ui-clipboard" element={<UiClipboard />} />
                <Route path="/ui-clipboard.html" element={<UiClipboard />} />
                <Route path="/activity-meeting" element={<ActivityMeeting />} />
                <Route path="/activity-meeting.html" element={<ActivityMeeting />} />
                <Route path="/icon-remix" element={<IconRemix />} />
                <Route path="/icon-remix.html" element={<IconRemix />} />
                <Route path="/edit-invoices" element={<EditInvoices />} />
                <Route path="/edit-invoices.html" element={<EditInvoices />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/subscription.html" element={<Subscription />} />
                <Route path="/icon-feather" element={<IconFeather />} />
                <Route path="/icon-feather.html" element={<IconFeather />} />
                <Route path="/localization-settings" element={<LocalizationSettings />} />
                <Route path="/localization-settings.html" element={<LocalizationSettings />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todo.html" element={<Todo />} />
                <Route path="/import-wizard" element={<ImportWizard />} />
                <Route path="/import-wizard.html" element={<ImportWizard />} />
                <Route path="/file-manager" element={<FileManager />} />
                <Route path="/file-manager.html" element={<FileManager />} />
                <Route path="/sms-campaign" element={<SmsCampaign />} />
                <Route path="/sms-campaign.html" element={<SmsCampaign />} />
                <Route path="/ui-popovers" element={<UiPopovers />} />
                <Route path="/ui-popovers.html" element={<UiPopovers />} />
                <Route path="/ui-ratio" element={<UiRatio />} />
                <Route path="/ui-ratio.html" element={<UiRatio />} />
                <Route path="/icon-tabler" element={<IconTabler />} />
                <Route path="/icon-tabler.html" element={<IconTabler />} />
                <Route path="/blank-page" element={<BlankPage />} />
                <Route path="/blank-page.html" element={<BlankPage />} />
                <Route path="/ui-placeholders" element={<UiPlaceholders />} />
                <Route path="/ui-placeholders.html" element={<UiPlaceholders />} />
                <Route path="/roles-permissions" element={<RolesPermissions />} />
                <Route path="/roles-permissions.html" element={<RolesPermissions />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/faq.html" element={<Faq />} />
                <Route path="/appearance-settings" element={<AppearanceSettings />} />
                <Route path="/appearance-settings.html" element={<AppearanceSettings />} />
                <Route path="/ticket-details" element={<TicketDetails />} />
                <Route path="/ticket-details.html" element={<TicketDetails />} />
                <Route path="/ui-buttons-group" element={<UiButtonsGroup />} />
                <Route path="/ui-buttons-group.html" element={<UiButtonsGroup />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/industry.html" element={<Industry />} />
                <Route path="/data-tables" element={<DataTables />} />
                <Route path="/data-tables.html" element={<DataTables />} />
                <Route path="/lead-aging-report" element={<LeadAgingReport />} />
                <Route path="/lead-aging-report.html" element={<LeadAgingReport />} />
                <Route path="/project-dashboard" element={<ProjectDashboard />} />
                <Route path="/project-dashboard.html" element={<ProjectDashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs.html" element={<Blogs />} />
                <Route path="/form-wizard" element={<FormWizard />} />
                <Route path="/form-wizard.html" element={<FormWizard />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="/sources.html" element={<Sources />} />
                <Route path="/chart-morris" element={<ChartMorris />} />
                <Route path="/chart-morris.html" element={<ChartMorris />} />
                <Route path="/icon-flag" element={<IconFlag />} />
                <Route path="/icon-flag.html" element={<IconFlag />} />
                <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
                <Route path="/executive-dashboard.html" element={<ExecutiveDashboard />} />
                <Route path="/activity-calls" element={<ActivityCalls />} />
                <Route path="/activity-calls.html" element={<ActivityCalls />} />
                <Route path="/membership-plans" element={<MembershipPlans />} />
                <Route path="/membership-plans.html" element={<MembershipPlans />} />
                <Route path="/deal-conversion-report" element={<DealConversionReport />} />
                <Route path="/deal-conversion-report.html" element={<DealConversionReport />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat.html" element={<Chat />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/profile-settings.html" element={<ProfileSettings />} />
                <Route path="/domain" element={<Domain />} />
                <Route path="/domain.html" element={<Domain />} />
                <Route path="/invoices-details" element={<InvoicesDetails />} />
                <Route path="/invoices-details.html" element={<InvoicesDetails />} />
                <Route path="/lead-reports" element={<LeadReports />} />
                <Route path="/lead-reports.html" element={<LeadReports />} />
                <Route path="/campaign" element={<Campaign />} />
                <Route path="/campaign.html" element={<Campaign />} />
                <Route path="/layout-fullwidth" element={<LayoutFullwidth />} />
                <Route path="/layout-fullwidth.html" element={<LayoutFullwidth />} />
                <Route path="/report-builder" element={<ReportBuilder />} />
                <Route path="/report-builder.html" element={<ReportBuilder />} />

            </Routes>
        </Suspense>
    );
};

export default GeneratedRoutes;
