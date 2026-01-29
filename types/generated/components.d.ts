import type { Schema, Attribute } from '@strapi/strapi';

export interface CardItemCardItem extends Schema.Component {
  collectionName: 'components_card_item_card_items';
  info: {
    displayName: 'CardItem';
    icon: 'apps';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.String;
    href: Attribute.String;
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
    linkInstagram: Attribute.String;
  };
}

export interface ContactSectionContact extends Schema.Component {
  collectionName: 'components_contact_section_contacts';
  info: {
    displayName: 'Contact';
    icon: 'earth';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    ContactInfo: Attribute.Component<'contact-info.contact-info'>;
  };
}

export interface CtaSectionHomeCallToAction extends Schema.Component {
  collectionName: 'components_cta_section_ctas';
  info: {
    displayName: 'CTA-section';
    icon: 'check';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'link.link'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
    download: Attribute.Boolean;
  };
}

export interface MainBannerMainBanner extends Schema.Component {
  collectionName: 'components_main_banner_main_banners';
  info: {
    displayName: 'MainBanner';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.RichText;
    link: Attribute.Component<'link.link'>;
  };
}

export interface SectionItemSectionItem extends Schema.Component {
  collectionName: 'components_section_item_section_items';
  info: {
    displayName: 'SectionItem';
    icon: 'expand';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    link: Attribute.Component<'link.link'>;
    description: Attribute.RichText;
  };
}

export interface SkillCardSkillCard extends Schema.Component {
  collectionName: 'components_skill_card_skill_cards';
  info: {
    displayName: 'SkillCard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card-item.card-item': CardItemCardItem;
      'contact-info.contact-info': ContactInfoContactInfo;
      'contact-section.contact': ContactSectionContact;
      'cta-section.home-call-to-action': CtaSectionHomeCallToAction;
      'link.link': LinkLink;
      'main-banner.main-banner': MainBannerMainBanner;
      'section-item.section-item': SectionItemSectionItem;
      'skill-card.skill-card': SkillCardSkillCard;
    }
  }
}
