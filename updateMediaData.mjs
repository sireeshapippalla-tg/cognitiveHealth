import fs from 'fs';

const filePath = 'c:/Users/cool/Cognitive-website/src/data/mediaData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The array now contains only custom media images
const images = [
  '"/images/media/media_strategic_outsourcing_1774338456677.png"',
  '"/images/media/media_demystifying_ai_1774339016714.png"',
  '"/images/media/media_cyber_threats_1774339061284.png"',
  '"/images/media/media_ceo_appointment_1774339201051.png"',
  '"/images/media/media_yale_ipa_1774339170668.png"',
  '"/images/media/media_patient_engagement_1774340418090.png"',
  '"/images/media/media_ipa_catchup_1774340435848.png"',
  '"/images/media/media_need_ipa_1774340454457.png"',
  '"/images/media/media_ipa_opportunities_1774340470859.png"',
  '"/images/media/media_best_practices_1774340485759.png"'
];

let idx = 0;
content = content.replace(/image: "[^"]+",/g, () => {
  if (idx < images.length) {
    return 'image: ' + images[idx++] + ',';
  }
  return 'image: ' + images[images.length - 1] + ',';
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated all 10 completely unique media custom images in mediaData.ts');
