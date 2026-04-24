import type { CmsConfig } from "@sveltia/cms";

export default {
    load_config_file: false,
    backend: {
        name: "github",
        repo: "DottaCunha/www.dottacunha.pt"
    },
    i18n: {
        structure: "multiple_folders",
        locales: ['en', 'pt'],
        initial_locales: "all",
        omit_default_locale_from_file_path: true,
    },
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    collections: [
        {
            name: "pages_new",
            label: "Pages",
            folder: "/src/content/pages_new",
            i18n: true,
            fields: [
                { name: "title", label: "Title", widget: "string", i18n: true },
                { name: "slug", label: "Slug", widget: "string", i18n: true },
                {
                    name: "blocks",
                    label: "Blocks",
                    widget: "list",
                    required: false,
                    i18n: true,
                    types: [
                        {
                            label: "Hero",
                            name: "hero",
                            fields: [
                                { name: "variant", label: "Variant", widget: "select", required: true, i18n: "duplicate", options: [{ label: "Full", value: "full" }, { label: "Half", value: "half" }] },
                                { name: "label", label: "Label", widget: "string", required: false, i18n: true },
                                { name: "heading", label: "Heading", widget: "string", required: false, i18n: true },
                                { name: "body", label: "Body", widget: "text", required: false, i18n: true },
                                { name: "image", label: "Image", widget: "image", required: false, i18n: "duplicate" },
                                { name: "cta_primary", label: "Primary CTA", widget: "object", required: false, i18n: "duplicate", fields: [{ name: "label", label: "Label", widget: "string", i18n: true }, { name: "href", label: "Link", widget: "string", i18n: true }] },
                                { name: "cta_secondary", label: "Secondary CTA", widget: "object", required: false, i18n: "duplicate", fields: [{ name: "label", label: "Label", widget: "string", i18n: true }, { name: "href", label: "Link", widget: "string", i18n: true }] },
                            ]
                        },
                        {
                            label: "Section",
                            name: "section",
                            fields: [
                                { name: "variant", label: "Variant", widget: "select", required: true, i18n: "duplicate", options: [{ label: "Full", value: "full" }, { label: "Simple", value: "simple" }] },
                                { name: "label", label: "Label", widget: "string", required: false, i18n: true },
                                { name: "heading", label: "Heading", widget: "string", required: false, i18n: true },
                                { name: "body", label: "Body", widget: "text", required: false, i18n: true },
                                { name: "images", label: "Images", widget: "list", required: false, i18n: "duplicate", field: { name: "image", label: "Image", widget: "image", i18n: "duplicate" } },
                                { name: "cta", label: "CTA", widget: "object", required: false, i18n: "duplicate", fields: [{ name: "label", label: "Label", widget: "string", i18n: true }, { name: "href", label: "Link", widget: "string", i18n: true }] },
                            ]
                        },
                        {
                            label: "Projects",
                            name: "projects",
                            fields: [
                                { name: "variant", label: "Variant", widget: "select", required: true, i18n: "duplicate", options: [{ label: "Featured", value: "featured" }, { label: "All", value: "all" }] },
                                { name: "label", label: "Label", widget: "string", required: false, i18n: true },
                                { name: "heading", label: "Heading", widget: "string", required: false, i18n: true },
                            ]
                        },
                        {
                            label: "List",
                            name: "list",
                            fields: [
                                { name: "variant", label: "Variant", widget: "select", required: true, i18n: "duplicate", options: [{ label: "List", value: "list" }, { label: "Grid", value: "grid" }] },
                                { name: "label", label: "Label", widget: "string", required: false, i18n: true },
                                { name: "heading", label: "Heading", widget: "string", required: false, i18n: true },
                                { name: "body", label: "Body", widget: "text", required: false, i18n: true },
                                {
                                    name: "items", label: "Items", widget: "list", i18n: true, fields: [
                                        { name: "heading", label: "Heading", widget: "string", i18n: true },
                                        { name: "description", label: "Description", widget: "text", i18n: true }
                                    ]
                                },
                            ]
                        },
                        {
                            label: "CTA",
                            name: "cta",
                            fields: [
                                { name: "variant", label: "Variant", widget: "select", required: false, i18n: "duplicate", options: [{ label: "Primary", value: "primary" }, { label: "Secondary", value: "secondary" }, { label: "Form", value: "form" }] },
                                { name: "label", label: "Label", widget: "string", required: false, i18n: true },
                                { name: "heading", label: "Heading", widget: "string", required: false, i18n: true },
                                { name: "body", label: "Body", widget: "text", required: false, i18n: true },
                                { name: "image", label: "Image", widget: "image", required: false, i18n: "duplicate" },
                                { name: "cta_primary", label: "Primary CTA", widget: "object", required: false, i18n: "duplicate", fields: [{ name: "label", label: "Label", widget: "string", i18n: true }, { name: "href", label: "Link", widget: "string", i18n: true }] },
                                { name: "cta_secondary", label: "Secondary CTA", widget: "object", required: false, i18n: "duplicate", fields: [{ name: "label", label: "Label", widget: "string", i18n: true }, { name: "href", label: "Link", widget: "string", i18n: true }] },
                                {
                                    name: 'form',
                                    label: 'Form',
                                    widget: 'relation',
                                    collection: 'forms',
                                    value_field: 'slug',
                                    // dropdown_threshold: 0,
                                    display_fields: ['slug'],
                                    search_fields: ['slug', 'title', 'description'],
                                    i18n: "duplicate"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "projects",
            label: "Projects",
            folder: "/src/content/projects",
            i18n: true,
            fields: [
                { name: "title", label: "Title", widget: "string", i18n: true },
                { name: "type", label: "Type", widget: "select", options: ["Apartments", "Villa", "Commercial"], i18n: "duplicate" },
                {
                    name: "status", label: "Status", widget: "select", i18n: "duplicate", options: [
                        { label: "Coming Soon", value: "coming_soon" },
                        { label: "Under Construction", value: "under_construction" },
                        { label: "Completed", value: "completed" }]
                },

                { name: "year", label: "Year", widget: "number", i18n: "duplicate" },
                { name: "location", label: "Location", widget: "string", i18n: "duplicate" },
                { name: "area", label: "Area", widget: "number", i18n: "duplicate" },

                { name: "totalUnits", label: "Total Units", widget: "number", i18n: "duplicate" },

                { name: "description", label: "Description", widget: "text", i18n: true },
                { name: "image", label: "Image", widget: "image", i18n: "duplicate" },

                { name: "visible", label: "Visible", widget: "boolean", required: false, i18n: "duplicate" },
                { name: "featured", label: "Featured", widget: "boolean", required: false, i18n: "duplicate" },
                { name: "order", label: "Order", widget: "number", required: false, i18n: "duplicate" },

                {
                    name: "units",
                    label: "Units",
                    widget: "list",
                    required: false,
                    i18n: true,
                    fields: [
                        { name: "id", label: "ID", widget: "string", i18n: "duplicate" },
                        { name: "area", label: "Area", widget: "number", i18n: "duplicate" },
                        { name: "typology", label: "Typology", widget: "string", i18n: "duplicate" },
                        { name: "bedrooms", label: "Bedrooms", widget: "number", i18n: "duplicate" },
                        { name: "bathrooms", label: "Bathrooms", widget: "number", i18n: "duplicate" },
                        { name: "floor", label: "Floor", widget: "number", i18n: "duplicate" },
                        { name: "orientation", label: "Orientation", widget: "string", required: false, i18n: "duplicate" },
                        { name: "description", label: "Description", widget: "text", required: false, i18n: true },
                        { name: "floorPlan", label: "Floor Plan", widget: "image", required: false, i18n: "duplicate" },
                        { name: "features", label: "Features", widget: "list", required: false, i18n: true, field: { name: "feature", label: "Feature", widget: "string", i18n: true } },
                        { name: "photos", label: "Photos", widget: "list", required: false, i18n: "duplicate", field: { name: "image", label: "Image", widget: "image", i18n: "duplicate" } },
                    ],
                },
            ],
        },
        {
            name: "forms",
            label: "Forms",
            folder: "/src/content/forms",
            i18n: true,
            fields: [
                { name: "title", label: "Title", widget: "string", required: false, i18n: true },
                { name: "slug", label: "Slug", widget: "string", required: false, i18n: "duplicate" },
                {
                    name: "fields", label: "Fields", widget: "list", required: false, i18n: true, types: [
                        {
                            name: "text", label: "Text", i18n: true, fields: [
                                { name: "name", label: "name", widget: "string", i18n: "duplicate" },
                                { name: "required", label: "Required", widget: "boolean", i18n: "duplicate" },
                                { name: "placeholder", label: "Placeholder", widget: "string", i18n: true },
                            ]
                        },
                        {
                            name: "email", label: "Email", i18n: true, fields: [
                                { name: "name", label: "name", widget: "string", i18n: "duplicate" },
                                { name: "required", label: "Required", widget: "boolean", i18n: "duplicate" },
                                { name: "placeholder", label: "Placeholder", widget: "string", i18n: true },
                            ]
                        },
                        {
                            name: "textarea", label: "Textarea", i18n: true, fields: [
                                { name: "name", label: "name", widget: "string", i18n: "duplicate" },
                                { name: "rows", label: "Rows", widget: "number", i18n: "duplicate" },
                                { name: "required", label: "Required", widget: "boolean", i18n: "duplicate" },
                                { name: "placeholder", label: "Placeholder", widget: "string", i18n: true },
                            ]
                        },
                        {
                            name: "select", label: "Select", i18n: true, fields: [
                                { name: "name", label: "name", widget: "string", i18n: "duplicate" },
                                { name: "required", label: "Required", widget: "boolean", i18n: "duplicate" },
                                { name: "placeholder", label: "Placeholder", widget: "string", i18n: true },
                                {
                                    name: "options", label: "Options", widget: "list", i18n: true, fields: [
                                        { name: "value", label: "Value", widget: "string", i18n: "duplicate" },
                                        { name: "label", label: "Label", widget: "string", i18n: true }
                                    ]
                                }
                            ]
                        },
                        // { name: "checkbox", label: "Checkbox", i18n: true, field: { name: "checkbox", label: "Checkbox", widget: "boolean", i18n: true } }
                    ]
                },
                { name: "submit_label", label: "Submit Label", widget: "string", required: true, i18n: true },
                { name: "success_message", label: "Success Message", widget: "string", required: true, i18n: true },
            ]
        }
    ]
} as const satisfies CmsConfig;
