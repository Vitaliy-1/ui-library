export default {
	selectRevisionDecisionForm: {
		id: 'selectRevisionDecision',
		method: '',
		action: 'emit',
		fields: [
			{
				name: 'decision',
				component: 'field-options',
				label: 'Require New Review Round',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: 4,
				type: 'radio',
				isOrderable: false,
				allowOnlySorting: false,
				options: [
					{
						value: 4,
						label:
							'Revisions will not be subject to a new round of peer reviews.',
					},
					{
						value: 5,
						label: 'Revisions will be subject to a new round of peer reviews.',
					},
				],
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: {
					label: 'Next',
				},
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
	selectRevisionRecommendationForm: {
		id: 'selectRevisionRecommendation',
		method: '',
		action: 'emit',
		fields: [
			{
				name: 'decision',
				component: 'field-options',
				label: 'Require New Review Round',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: 10,
				type: 'radio',
				isOrderable: false,
				allowOnlySorting: false,
				options: [
					{
						value: 10,
						label:
							'Revisions should not be subject to a new round of peer reviews.',
					},
					{
						value: 11,
						label:
							'Revisions should be subject to a new round of peer reviews.',
					},
				],
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: {
					label: 'Next',
				},
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
	dashboardPage: 'editorialDashboard',
	countPerPage: 30,
	filtersForm: {
		id: 'submissionFilters',
		method: '',
		action: 'emit',
		fields: [
			{
				name: 'sectionIds',
				component: 'field-options',
				label: 'Section',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: [],
				type: 'checkbox',
				isOrderable: false,
				allowOnlySorting: false,
				options: [
					{
						value: 1,
						label: 'Articles',
					},
					{
						value: 2,
						label: 'Reviews',
					},
				],
			},
			{
				name: 'assignedTo',
				component: 'field-select-users',
				label: 'Assigned To Editor',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: [],
				apiUrl:
					'http://localhost:7002/index.php/publicknowledge/api/v1/users?roleIds[]=16&roleIds[]=17',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'issueIds',
				component: 'field-select-issues',
				label: 'Issues',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: [],
				apiUrl: 'http://localhost:7002/index.php/publicknowledge/api/v1/issues',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'categoryIds',
				component: 'field-options',
				label: 'Categories',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: [],
				type: 'checkbox',
				isOrderable: false,
				allowOnlySorting: false,
				options: [
					{
						value: 1,
						label: 'Applied Science',
					},
					{
						value: 2,
						label: 'Applied Science > Computer Science',
					},
					{
						value: 3,
						label: 'Applied Science > Engineering',
					},
					{
						value: 4,
						label: 'Social Sciences',
					},
					{
						value: 5,
						label: 'Social Sciences > Sociology',
					},
					{
						value: 6,
						label: 'Social Sciences > Anthropology',
					},
				],
			},
			{
				name: 'daysInactive',
				component: 'field-slider',
				label: 'Days since last activity',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: 0,
				min: 0,
				max: 180,
				step: 1,
				minLabel: null,
				maxLabel: null,
				valueLabel: null,
				valueLabelMin: null,
				valueLabelMax: null,
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: null,
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
	views: [
		{
			id: 'assigned-to-me',
			name: 'Assigned to me',
			count: 6,
			op: 'assigned',
			queryParams: {
				status: [1],
			},
		},
		{
			id: 'active',
			name: 'Active submissions',
			count: 18,
			queryParams: {
				status: [1],
			},
		},
		{
			id: 'needs-editor',
			name: 'Needs editor',
			count: 1,
			queryParams: {
				isUnassigned: true,
				status: [1],
			},
		},
		{
			id: 'initial-review',
			name: 'All in desk/initial review',
			count: 9,
			queryParams: {
				stageIds: [1],
				status: [1],
			},
		},
		{
			id: 'external-review',
			name: 'All in peer review',
			count: 5,
			queryParams: {
				stageIds: [3],
				status: [1],
			},
		},
		{
			id: 'needs-reviewers',
			name: 'Needs reviewers',
			count: 3,
			op: 'reviews',
			queryParams: {
				needsReviewers: true,
			},
		},
		{
			id: 'awaiting-reviews',
			name: 'Awaiting reviews',
			count: 1,
			op: 'reviews',
			queryParams: {
				awaitingReviews: true,
			},
		},
		{
			id: 'reviews-submitted',
			name: 'Reviews submitted',
			count: 1,
			op: 'reviews',
			queryParams: {
				reviewsSubmitted: true,
			},
		},
		{
			id: 'copyediting',
			name: 'All in copyediting',
			count: 2,
			queryParams: {
				stageIds: [4],
				status: [1],
			},
		},
		{
			id: 'production',
			name: 'All in production',
			count: 2,
			queryParams: {
				stageIds: [5],
				status: [1],
			},
		},
		{
			id: 'scheduled',
			name: 'Scheduled for publication',
			count: 0,
			queryParams: {
				status: [5],
			},
		},
		{
			id: 'published',
			name: 'Published',
			count: 7,
			queryParams: {
				status: [3],
			},
		},
		{
			id: 'declined',
			name: 'Declined',
			count: 1,
			queryParams: {
				status: [4],
			},
		},
	],
	columns: [
		{
			id: 'id',
			header: 'ID',
			componentName: 'DashboardCellSubmissionId',
			sortable: true,
		},
		{
			id: 'title',
			header: 'Submissions',
			componentName: 'DashboardCellSubmissionTitle',
			sortable: false,
		},
		{
			id: 'stage',
			header: 'Stage',
			componentName: 'DashboardCellSubmissionStage',
			sortable: false,
		},
		{
			id: 'days',
			header: 'Days',
			componentName: 'DashboardCellSubmissionDays',
			sortable: false,
		},
		{
			id: 'activity',
			header: 'Editorial Activity',
			componentName: 'DashboardCellSubmissionActivity',
			sortable: false,
		},
		{
			id: 'actions',
			header: 'Actions',
			componentName: 'DashboardCellSubmissionActions',
			sortable: false,
		},
	],
	sections: {
		1: {
			_data: {
				id: 1,
				contextId: 1,
				reviewFormId: null,
				sequence: 0,
				editorRestricted: false,
				metaIndexed: true,
				metaReviewed: true,
				abstractsNotRequired: false,
				hideTitle: false,
				hideAuthor: false,
				isInactive: false,
				wordCount: 500,
				title: {
					en: 'Articles',
					fr_CA: '',
				},
				abbrev: {
					en: 'ART',
					fr_CA: '',
				},
				identifyType: {
					en: '',
					fr_CA: '',
				},
				policy: {
					en: '<p>Section default policy</p>',
					fr_CA: '',
				},
			},
			_hasLoadableAdapters: false,
			_metadataExtractionAdapters: [],
			_extractionAdaptersLoaded: false,
			_metadataInjectionAdapters: [],
			_injectionAdaptersLoaded: false,
		},
		2: {
			_data: {
				id: 2,
				contextId: 1,
				reviewFormId: null,
				sequence: 1,
				editorRestricted: false,
				metaIndexed: true,
				metaReviewed: true,
				abstractsNotRequired: true,
				hideTitle: false,
				hideAuthor: false,
				isInactive: false,
				wordCount: 0,
				title: {
					en: 'Reviews',
					fr_CA: '',
				},
				abbrev: {
					en: 'REV',
					fr_CA: '',
				},
				identifyType: {
					en: 'Review Article',
					fr_CA: '',
				},
				policy: {
					en: '',
					fr_CA: '',
				},
			},
			_hasLoadableAdapters: false,
			_metadataExtractionAdapters: [],
			_extractionAdaptersLoaded: false,
			_metadataInjectionAdapters: [],
			_injectionAdaptersLoaded: false,
		},
	},
	publicationTitleAbstractForm: {
		id: 'titleAbstract',
		method: 'PUT',
		action: 'emit',
		fields: [
			{
				name: 'prefix',
				component: 'field-text',
				label: 'Prefix',
				description: 'Examples: A, The',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				inputType: 'text',
				optIntoEdit: false,
				optIntoEditLabel: '',
				size: 'small',
				prefix: '',
			},
			{
				name: 'title',
				component: 'field-rich-text',
				label: 'Title',
				groupId: 'default',
				isRequired: true,
				isMultilingual: true,
				isInert: false,
				value: [],
				i18nFormattingLabel: 'Formatting',
				toolbar: 'formatgroup',
				plugins: [],
				size: 'oneline',
				validElements: 'b,i,u,sup,sub',
			},
			{
				name: 'subtitle',
				component: 'field-rich-text',
				label: 'Subtitle',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				i18nFormattingLabel: 'Formatting',
				toolbar: 'formatgroup',
				plugins: [],
				size: 'oneline',
				validElements: 'b,i,u,sup,sub',
			},
			{
				name: 'abstract',
				component: 'field-rich-textarea',
				label: 'Abstract',
				groupId: 'default',
				isRequired: true,
				isMultilingual: true,
				isInert: false,
				value: [],
				plugins: ['link'],
				size: 'large',
				toolbar: 'bold italic superscript subscript | link',
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: {
					label: 'Save',
				},
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
	publicationMetadataForm: {
		id: 'metadata',
		method: 'PUT',
		action: 'emit',
		fields: [
			{
				name: 'keywords',
				component: 'field-controlled-vocab',
				label: 'Keywords',
				tooltip:
					'Keywords are typically one- to three-word phrases that are used to indicate the main topics of a submission.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				apiUrl:
					'http://localhost:7002/index.php/publicknowledge/api/v1/vocabs?vocab=submissionKeyword&submissionId=__submissionId__',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'subjects',
				component: 'field-controlled-vocab',
				label: 'Subjects',
				tooltip:
					'Subjects will be keywords, key phrases or classification codes that describe a topic of the submission.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				apiUrl:
					'http://localhost:7002/index.php/publicknowledge/api/v1/vocabs?vocab=submissionSubject&submissionId=__submissionId__',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'disciplines',
				component: 'field-controlled-vocab',
				label: 'Disciplines',
				tooltip:
					'Disciplines are types of study or branches of knowledge as described by university faculties and learned societies.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				apiUrl:
					'http://localhost:7002/index.php/publicknowledge/api/v1/vocabs?vocab=submissionDiscipline&submissionId=__submissionId__',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'supportingAgencies',
				component: 'field-controlled-vocab',
				label: 'Supporting Agencies',
				tooltip:
					'Supporting agencies may indicate the source of research funding or other institutional support that facilitated the research.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				apiUrl:
					'http://localhost:7002/index.php/publicknowledge/api/v1/vocabs?vocab=submissionAgency&submissionId=__submissionId__',
				deselectLabel: 'Remove {$item}',
				getParams: {},
				selectedLabel: 'Selected:',
				selected: [],
			},
			{
				name: 'coverage',
				component: 'field-text',
				label: 'Coverage',
				tooltip:
					"Coverage will typically indicate a work's spatial location (a place name or geographic coordinates), temporal period (a period label, date, or date range) or jurisdiction (such as a named administrative entity).",
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				inputType: 'text',
				optIntoEdit: false,
				optIntoEditLabel: '',
				size: 'normal',
				prefix: '',
			},
			{
				name: 'rights',
				component: 'field-text',
				label: 'Rights',
				tooltip:
					'Any rights held over the submission, which may include Intellectual Property Rights (IPR), Copyright, and various Property Rights.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				inputType: 'text',
				optIntoEdit: false,
				optIntoEditLabel: '',
				size: 'normal',
				prefix: '',
			},
			{
				name: 'source',
				component: 'field-text',
				label: 'Source',
				tooltip:
					'The source may be an ID, such as a DOI, of another work or resource from which the submission is derived.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				inputType: 'text',
				optIntoEdit: false,
				optIntoEditLabel: '',
				size: 'normal',
				prefix: '',
			},
			{
				name: 'type',
				component: 'field-text',
				label: 'Type',
				tooltip:
					'The nature or genre of the main content of the submission. The type is usually "Text", but may also be "Dataset", "Image" or any of the <a target="_blank" href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/">Dublin Core types</a>.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: true,
				isInert: false,
				value: [],
				inputType: 'text',
				optIntoEdit: false,
				optIntoEditLabel: '',
				size: 'normal',
				prefix: '',
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: {
					label: 'Save',
				},
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
	publicationCitationsForm: {
		id: 'citations',
		method: 'PUT',
		action: 'emit',
		fields: [
			{
				name: 'citationsRaw',
				component: 'field-textarea',
				label: 'References',
				description:
					'Enter each reference on a new line so that they can be extracted and recorded separately.',
				groupId: 'default',
				isRequired: false,
				isMultilingual: false,
				isInert: false,
				value: null,
			},
		],
		groups: [
			{
				id: 'default',
				pageId: 'default',
			},
		],
		hiddenFields: {},
		pages: [
			{
				id: 'default',
				submitButton: {
					label: 'Save',
				},
			},
		],
		primaryLocale: 'en',
		visibleLocales: ['en'],
		supportedFormLocales: [],
		errors: {},
	},
};
