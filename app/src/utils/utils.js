/**
 * Created by mrpandat on 31/10/2016.
 */

export default function cutSentence(sentence, length) {
  const carName = sentence.substr(0, length);
  return carName.substr(0, Math.min(carName.length, carName.lastIndexOf(" ")));
}