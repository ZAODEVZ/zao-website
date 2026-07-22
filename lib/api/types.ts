// Public API response types

export interface ApiEvent {
  title: string
  start: string // ISO 8601
  end: string // ISO 8601
  url: string
  location: string | null
}

export interface EventsResponse {
  updatedAt: string
  upcoming: ApiEvent[]
  recent: ApiEvent[]
}

export interface WaveWarZBattle {
  battleId: string
  artist1: {
    name: string
  }
  artist2: {
    name: string
  }
  winnerSide: 'artist1' | 'artist2' | null
  volume?: number
}

export interface WaveWarZArtist {
  address: string
  name: string
  winRate?: number
  totalBattles?: number
}

export interface WaveWarZSong {
  id: string
  title: string
  artist: string
  battleCount?: number
}

export interface WaveWarZStatsResponse {
  volume: number
  solPriceUsd: number
  activeBattles: number
}

export interface WaveWarZResponse {
  updatedAt: string
  volume: number
  solPriceUsd: number
  liveBattle?: WaveWarZBattle | null
  latestBattles: WaveWarZBattle[]
  topArtists: WaveWarZArtist[]
  topSongs: WaveWarZSong[]
}

export interface StatsResponse {
  updatedAt: string
  wavewarz: {
    volume: number
    solPriceUsd: number
    activeBattles: number
  }
  events: {
    upcomingCount: number
  }
}

export interface ApiDirectoryResponse {
  name: string
  description: string
  endpoints: Array<{
    path: string
    description: string
    method: string
  }>
  updatedAt: string
}
