import type { Schema, Attribute } from '@strapi/strapi';

export interface CallToActionSectionHomeCallToAction extends Schema.Component {
  collectionName: 'components_call_to_action_section_home_call_to_actions';
  info: {
    displayName: 'CallToActionSection';
    icon: 'check';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    callToAction: Attribute.String;
  };
}

export interface CardItemCardItem extends Schema.Component {
  collectionName: 'components_card_item_card_items';
  info: {
    displayName: 'CardItem';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.String;
  };
}

export interface ContactInfoContactInfo extends Schema.Component {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'ContactInfo';
    icon: 'phone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    street: Attribute.String;
    number: Attribute.String;
    neighborhood: Attribute.String;
    cep: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
    instagram: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
  };
}

export interface ContactSectionContact extends Schema.Component {
  collectionName: 'components_contact_section_contacts';
  info: {
    displayName: 'Contact';
    icon: 'earth';
  };
  attributes: {
    image: Attribute.Media;
    ContactInfo: Attribute.Component<'contact-info.contact-info'>;
  };
}

export interface MainBannerMainBanner extends Schema.Component {
  collectionName: 'components_main_banner_main_banners';
  info: {
    displayName: 'MainBanner';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.RichText;
    callToAction: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'call-to-action-section.home-call-to-action': CallToActionSectionHomeCallToAction;
      'card-item.card-item': CardItemCardItem;
      'contact-info.contact-info': ContactInfoContactInfo;
      'contact-section.contact': ContactSectionContact;
      'main-banner.main-banner': MainBannerMainBanner;
    }
  }
}
