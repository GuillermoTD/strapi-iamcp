import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    isReverse: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface BlocksText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_blocks_two_columns';
  info: {
    displayName: 'twoColumns';
  };
  attributes: {
    textColumns: Schema.Attribute.Component<'blocks.text', true> &
      Schema.Attribute.Required;
  };
}

export interface BlocksVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ButtonsButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    subheader: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_blocks';
  info: {
    displayName: 'contactBlock';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'shared.contact', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'shared.contact-block', false>;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    button: Schema.Attribute.Component<'buttons.button', false>;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card': BlocksCard;
      'blocks.image': BlocksImage;
      'blocks.text': BlocksText;
      'blocks.two-columns': BlocksTwoColumns;
      'blocks.video': BlocksVideo;
      'buttons.button': ButtonsButton;
      'shared.banner': SharedBanner;
      'shared.contact': SharedContact;
      'shared.contact-block': SharedContactBlock;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
    }
  }
}
