'use server'

import { revalidatePath } from 'next/cache'

// This would typically interact with a database
const photos = [
  { id: 1, src: "/travelling/bhaiyu.jpeg", alt: "The best kind of reunion: friends who feel like family. 🌟 #CherishedMoments", likes: 67 },
  { id: 2, src: "/travelling/atal_brij.jpeg", alt: "ridging the gap between the past and present with laughter, memories, and the best kind of friends. #🌉❤️", likes: 15 },
  { id: 3, src: "/travelling/ahemdabad_street.jpeg", alt: "Walking down memory lane, one street at a time. 🌆💫 #StreetVibes", likes: 18 },
  { id: 4, src: "/travelling/birds.jpeg", alt: "one friend and one mile at a time. 🚴‍♂️💨 #BikeAdventures", likes: 32 },
  { id: 5, src: "/travelling/boat.jpeg", alt: "ike the calm of the lake, true friendships never ripple. 🌊💙 #tholLake #ahemdabad", likes: 26 },
  { id: 6, src: "/travelling/dako.jpeg", alt: "Roaring with love, little lion brother in the wild. 🦁💛 #TinyButMighty #LionHearted", likes: 30 },
  { id: 7, src: "/travelling/h&m.jpeg", alt: "Just me, myself, and I — no filter needed. 😉✨ #SelfieMode", likes: 11 },
  { id: 8, src: "/travelling/kaj_dandi.jpeg", alt: "Brothers by chance, friends by choice 💪💙 #Brotherhood", likes: 22 },
  { id: 9, src: "/travelling/garba.jpeg", alt: "Garba is god gifted art #GARBA", likes: 20 },
  { id: 10, src: "/travelling/katu.jpeg", alt: "Little champ", likes: 17 },
  { id: 11, src: "/travelling/garba_2.jpeg", alt: "Always Greatfull #Black", likes: 40 },
  { id: 12, src: "/travelling/miow.jpeg", alt: "Lets see #cutie", likes: 36 },
  { id: 13, src: "/travelling/royal.jpeg", alt: "Riding into the horizon with the roar of a Royal Enfield  #RoyalEnfieldRider", likes: 23 },
  { id: 14, src: "/travelling/st_week.jpeg", alt: "Chasing dreams, breaking limits, and playing with passion. 🏅🔥 #GameOn #SportSpirit", likes: 50 },
  { id: 15, src: "/travelling/thol.jpeg", alt: "See the dream, believe in it, and make it your reality. ✨💫 #DreamBig", likes: 21 },
  { id: 16, src: "/travelling/treditional_fest.jpeg", alt: "Surrounded by laughter, memories, 🌟👫❤️ #SquadGoals", likes: 37 },
]

export async function likePhoto(id: number) {
  const photo = photos.find(p => p.id === id)
  if (photo) {
    photo.likes += 1
    revalidatePath('/')
  }
}

export async function getPhotos() {
  return photos
}
