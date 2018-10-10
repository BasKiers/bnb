import CMS from "netlify-cms";

import NetlifyCMSWidgetColor from "netlify-cms-widget-color";
import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerWidget("color", NetlifyCMSWidgetColor.Control);

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
