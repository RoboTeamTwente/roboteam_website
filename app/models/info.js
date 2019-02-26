import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  createdAt: attr('date'),
  updatedAt: attr('date'),
  contactName: attr('string'),
  contactEmail: attr('string'),
  contactPhone: attr('string'),
  contactName: attr('string'),
 
  locationAddress: attr('string'),
  locationPostalCode: attr('string'),
  locationCity: attr('string'),
  locationCountry: attr('string'),
  locationRoom: attr('string'),

  currentTeamYear: attr('string'), //2018/2019
  nextTeamYear: attr('string'),    //2019/2020

  robocupDate: attr('date'),

  youtubeLink: attr('string'),
  twitterLink: attr('string'),
  instaLink: attr('string'),
  linkedInLink: attr('string'),
  githubLink: attr('string'),

  aboutText: attr('string'),
  joinText: attr('string'),
  footerText: attr('string')
});
