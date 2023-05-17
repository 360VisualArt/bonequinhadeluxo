(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 1",
 "id": "panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_1DD9E875_1005_065D_41A8_A4E23BEDF564"
 ],
 "thumbnailUrl": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "vfov": 180,
 "label": "Foto 2",
 "id": "panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_1E704416_1003_0DDF_419A_E1DA1DC693EE",
  "this.overlay_1EBD9F73_1003_3A55_4166_69D2850F4616"
 ],
 "thumbnailUrl": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_camera"
  },
  {
   "media": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_camera"
  },
  {
   "media": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_camera"
  },
  {
   "media": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_camera"
  },
  {
   "media": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_camera"
  },
  {
   "media": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_camera"
  },
  {
   "media": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_camera"
  },
  {
   "media": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_camera"
  },
  {
   "media": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_camera"
  },
  {
   "media": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_camera"
  },
  {
   "media": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555_camera"
  },
  {
   "media": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_camera"
  },
  {
   "media": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8_camera"
  },
  {
   "media": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18_camera"
  },
  {
   "media": "this.panorama_1B886255_1005_0A52_41AF_61A69D62C415",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_1B886255_1005_0A52_41AF_61A69D62C415_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "vfov": 180,
 "label": "Foto 9",
 "id": "panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_03676DD1_1003_1E55_41A1_7DE9C537B757",
  "this.overlay_03BDF041_1003_05B2_4197_76DA9C348BD4"
 ],
 "thumbnailUrl": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 169.71,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26D2787A_2A82_C3CE_41C3_0961A977353D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1B7F789F_1003_06CD_4183_EA29085905C8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 94.04,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_2618791F_2A82_C546_41C1_796592E7D06E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 68.33,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26452975_2A82_C5C5_41C4_5E6A3B982C3C",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 8",
 "id": "panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_031DC19B_1003_06D6_41A9_B4F8F57731B2",
  "this.overlay_034E051B_1003_0FD5_417D_138FA3AADC5E"
 ],
 "thumbnailUrl": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_2E69C15A_2055_B088_415F_E8FE20B4C35E.ogg",
  "mp3Url": "media/audio_2E69C15A_2055_B088_415F_E8FE20B4C35E.mp3"
 },
 "class": "MediaAudio",
 "id": "audio_2E69C15A_2055_B088_415F_E8FE20B4C35E",
 "data": {
  "label": "Broken Hearted Girl (1)"
 }
},
{
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26335949_2A82_C5CC_41B4_FA66C7F25D9E",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 7",
 "id": "panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_02C565C3_1005_0EB6_4167_749807E6D87B",
  "this.overlay_034DECE4_1005_1E73_41AC_02F5800E017A"
 ],
 "thumbnailUrl": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1B81D18A_1003_06B7_4163_59566FC1C555_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -75.67,
  "class": "PanoramaCameraPosition",
  "pitch": 16.16
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26393960_2A82_C5FB_41B2_B6797749D138",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 10",
 "id": "panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_04233D95_1007_7EDD_419D_ED6C3B63DA68",
  "this.overlay_0435D843_1007_05B5_41A1_4E3A1711B75D"
 ],
 "thumbnailUrl": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1B45DE78_1003_1A53_4194_689B871D2F18_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1B886255_1005_0A52_41AF_61A69D62C415_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 166.04,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26E508A9_2A82_C34A_41C0_5704F8B574B9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 5",
 "id": "panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_00ABB80F_100D_05CE_41A3_E351EACF51AA",
  "this.overlay_00CFF25A_100D_0A57_418D_35E4293AE03F"
 ],
 "thumbnailUrl": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "vfov": 180,
 "label": "Foto 11",
 "id": "panorama_1B81D18A_1003_06B7_4163_59566FC1C555",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_051D2472_1005_0E56_416E_101F4A7CD3BD",
  "this.overlay_05668471_1003_0E52_4193_C98A0D15E6E0"
 ],
 "thumbnailUrl": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": -116.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_265FC9A1_2A82_C57A_41C0_82FAE48B4F3C",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 6",
 "id": "panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_017EAA81_1003_1AB5_419B_9644F9796115",
  "this.overlay_01D6E726_1003_0BFE_41AD_CBDD401B0E72"
 ],
 "thumbnailUrl": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_camera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 3",
 "id": "panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_1F23A8E5_100D_0672_41A6_7643A9219826",
  "this.overlay_1F66B007_100D_05BD_4190_16762D555111"
 ],
 "thumbnailUrl": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "vfov": 180,
 "label": "Foto 13",
 "id": "panorama_1B7F789F_1003_06CD_4183_EA29085905C8",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_06A44005_100F_05B2_4174_E523E54F82BB",
  "this.overlay_06E2D0DF_100F_064D_4150_A8C90CAE2A27"
 ],
 "thumbnailUrl": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "vfov": 180,
 "label": "Foto 12",
 "id": "panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_064712D1_100D_0A52_41A7_C98E7A947117",
  "this.overlay_067850E1_100D_0672_41A6_E1B540A22A71"
 ],
 "thumbnailUrl": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "vfov": 180,
 "label": "Foto 15",
 "id": "panorama_1B886255_1005_0A52_41AF_61A69D62C415",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_087DDCF8_1003_3E52_4194_4A8933857F36"
 ],
 "thumbnailUrl": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 169.71,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_278759F3_2A82_C4DE_4189_97BFD89B338F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26F9C8D8_2A82_C4CA_41C1_FE22B2FEDB3B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 79.35,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_260528EF_2A82_C4C5_41C3_F73F0072CCE9",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 160.16,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_27B37A5A_2A82_C7CE_41C2_9B5EE2ED1C17",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.71,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_2676A9CC_2A82_C4CA_41B3_4FB06500BAFD",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_camera"
  },
  {
   "media": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_camera"
  },
  {
   "media": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_camera"
  },
  {
   "media": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_camera"
  },
  {
   "media": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_camera"
  },
  {
   "media": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_camera"
  },
  {
   "media": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_camera"
  },
  {
   "media": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_camera"
  },
  {
   "media": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_camera"
  },
  {
   "media": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_camera"
  },
  {
   "media": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555_camera"
  },
  {
   "media": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_camera"
  },
  {
   "media": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8_camera"
  },
  {
   "media": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18_camera"
  },
  {
   "media": "this.panorama_1B886255_1005_0A52_41AF_61A69D62C415",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B886255_1005_0A52_41AF_61A69D62C415_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "vfov": 180,
 "label": "Foto 4",
 "id": "panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_1FE0F122_100F_07F6_41A0_5DDFB9F2C5C4",
  "this.overlay_0000A089_100F_06B2_41AC_5A40F54BD1EB"
 ],
 "thumbnailUrl": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": -85.22,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26EC98C1_2A82_C33A_41A3_4D513DBE62B7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 88.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_2651298B_2A82_C54E_41A6_D5C0DF8200A4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 94.04,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_2627E934_2A82_C55B_41BA_A427DB60386C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 }
},
{
 "initialPosition": {
  "yaw": -50.69,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_27BEBA81_2A82_C73A_4190_0A4EFF2D644B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -39.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_27A3EA39_2A82_C74A_41AC_8EC0F0054FD0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.12,
  "class": "PanoramaCameraPosition",
  "pitch": -10.29
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_27910A14_2A82_C75A_41B5_AE667EC21DD7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 173.39,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26C42861_2A82_C3FA_41B4_4E40F91DEC16",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Foto 14",
 "id": "panorama_1B45DE78_1003_1A53_4194_689B871D2F18",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1B886255_1005_0A52_41AF_61A69D62C415",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0773D07B_100D_0656_4183_9D501B9D6E77",
  "this.overlay_078F68AD_100D_06CD_4192_06378F4995C5"
 ],
 "thumbnailUrl": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 176.33,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_266AE9B6_2A82_C546_41A4_128F35BB7910",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -107.27,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26131907_2A82_C546_41BC_3BABF7872DCD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -105.06,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_26D9B892_2A82_C35E_41B9_D74FBD9CB256",
 "automaticZoomSpeed": 10
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minHeight": 50,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingBottom": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "top": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "0%",
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 641,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--INFO photo"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "--REALTOR"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.58,
   "image": "this.AnimatedImageResource_0D3C50DE_1003_064F_41AC_472F140DFB32",
   "pitch": -38.2,
   "yaw": -3.82,
   "distance": 100
  }
 ],
 "id": "overlay_1DD9E875_1005_065D_41A8_A4E23BEDF564",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.82,
   "hfov": 23.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.52,
   "image": "this.AnimatedImageResource_0D3CA0E1_1003_0675_41AC_D4E9E8A07DFE",
   "pitch": -27.9,
   "yaw": -5.19,
   "distance": 100
  }
 ],
 "id": "overlay_1E704416_1003_0DDF_419A_E1DA1DC693EE",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.19,
   "hfov": 26.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.26,
   "image": "this.AnimatedImageResource_0D3D10E2_1003_0677_4173_989DCEC76A5E",
   "pitch": -28.93,
   "yaw": 176.01,
   "distance": 100
  }
 ],
 "id": "overlay_1EBD9F73_1003_3A55_4166_69D2850F4616",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F, this.camera_26D2787A_2A82_C3CE_41C3_0961A977353D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 176.01,
   "hfov": 26.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.05,
   "image": "this.AnimatedImageResource_0D3920F1_1003_0655_41A7_B8AB94963300",
   "pitch": -33.39,
   "yaw": -7.94,
   "distance": 100
  }
 ],
 "id": "overlay_03676DD1_1003_1E55_41A1_7DE9C537B757",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16, this.camera_26F9C8D8_2A82_C4CA_41C1_FE22B2FEDB3B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -7.94,
   "hfov": 25.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.17,
   "image": "this.AnimatedImageResource_0D3980F2_1003_0657_4198_191596C716F2",
   "pitch": -29.27,
   "yaw": 81.97,
   "distance": 100
  }
 ],
 "id": "overlay_03BDF041_1003_05B2_4197_76DA9C348BD4",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7, this.camera_260528EF_2A82_C4C5_41C3_F73F0072CCE9); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 81.97,
   "hfov": 26.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.23,
   "image": "this.AnimatedImageResource_0D38B0F0_1003_0653_419D_5B22EF7B98C2",
   "pitch": -24.81,
   "yaw": 77.17,
   "distance": 100
  }
 ],
 "id": "overlay_031DC19B_1003_06D6_41A9_B4F8F57731B2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31, this.camera_278759F3_2A82_C4DE_4189_97BFD89B338F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 77.17,
   "hfov": 27.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.75,
   "image": "this.AnimatedImageResource_0D38F0F0_1003_0653_41A1_DAEF26459532",
   "pitch": -34.42,
   "yaw": -11.37,
   "distance": 100
  }
 ],
 "id": "overlay_034E051B_1003_0FD5_417D_138FA3AADC5E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028, this.camera_2676A9CC_2A82_C4CA_41B3_4FB06500BAFD); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -11.37,
   "hfov": 24.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.58,
   "image": "this.AnimatedImageResource_0D3FF0EE_1003_064F_4191_D5F0A428A5FA",
   "pitch": -38.2,
   "yaw": -3.82,
   "distance": 100
  }
 ],
 "id": "overlay_02C565C3_1005_0EB6_4167_749807E6D87B",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16, this.camera_26393960_2A82_C5FB_41B2_B6797749D138); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.82,
   "hfov": 23.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.63,
   "image": "this.AnimatedImageResource_0D3850EF_1003_064D_41AD_06A49050A72D",
   "pitch": -31.33,
   "yaw": 80.94,
   "distance": 100
  }
 ],
 "id": "overlay_034DECE4_1005_1E73_41AC_02F5800E017A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A, this.camera_26452975_2A82_C5C5_41C4_5E6A3B982C3C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 80.94,
   "hfov": 25.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.75,
   "image": "this.AnimatedImageResource_0D39F0F3_1003_0655_41AA_35AB33EF464C",
   "pitch": -34.42,
   "yaw": -89.96,
   "distance": 100
  }
 ],
 "id": "overlay_04233D95_1007_7EDD_419D_ED6C3B63DA68",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028, this.camera_26131907_2A82_C546_41BC_3BABF7872DCD); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.96,
   "hfov": 24.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.67,
   "image": "this.AnimatedImageResource_0D38D0F4_1003_0653_4181_ED0623CABCD6",
   "pitch": -22.75,
   "yaw": 97.42,
   "distance": 100
  }
 ],
 "id": "overlay_0435D843_1007_05B5_41A1_4E3A1711B75D",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555, this.camera_2618791F_2A82_C546_41C1_796592E7D06E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 97.42,
   "hfov": 27.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.63,
   "image": "this.AnimatedImageResource_0D3EA0EB_1003_0675_416F_86E772090D62",
   "pitch": -31.33,
   "yaw": -5.19,
   "distance": 100
  }
 ],
 "id": "overlay_00ABB80F_100D_05CE_41A3_E351EACF51AA",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.19,
   "hfov": 25.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.34,
   "image": "this.AnimatedImageResource_0D3EE0EC_1003_0673_41AE_A6546D7DD960",
   "pitch": -32.36,
   "yaw": 159.88,
   "distance": 100
  }
 ],
 "id": "overlay_00CFF25A_100D_0A57_418D_35E4293AE03F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44, this.camera_27B37A5A_2A82_C7CE_41C2_9B5EE2ED1C17); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 159.88,
   "hfov": 25.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.7,
   "image": "this.AnimatedImageResource_0D3900F5_1003_065D_41AC_1AE74B2CB11C",
   "pitch": -43.69,
   "yaw": -112.27,
   "distance": 100
  }
 ],
 "id": "overlay_051D2472_1005_0E56_416E_101F4A7CD3BD",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7, this.camera_265FC9A1_2A82_C57A_41C0_82FAE48B4F3C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -112.27,
   "hfov": 21.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.02,
   "image": "this.AnimatedImageResource_0D3960F6_1003_065F_4171_A74A3B5A6BEE",
   "pitch": -36.82,
   "yaw": 127.62,
   "distance": 100
  }
 ],
 "id": "overlay_05668471_1003_0E52_4193_C98A0D15E6E0",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB, this.camera_2651298B_2A82_C54E_41A6_D5C0DF8200A4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 127.62,
   "hfov": 24.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.26,
   "image": "this.AnimatedImageResource_0D3F50ED_1003_0672_41AC_A5591F604A9B",
   "pitch": -28.93,
   "yaw": -93.05,
   "distance": 100
  }
 ],
 "id": "overlay_017EAA81_1003_1AB5_419B_9644F9796115",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31, this.camera_26EC98C1_2A82_C33A_41A3_4D513DBE62B7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -93.05,
   "hfov": 26.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.68,
   "image": "this.AnimatedImageResource_0D3F80ED_1003_064D_41A5_6FA46D3536CF",
   "pitch": -27.21,
   "yaw": 174.29,
   "distance": 100
  }
 ],
 "id": "overlay_01D6E726_1003_0BFE_41AD_CBDD401B0E72",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0, this.camera_26E508A9_2A82_C34A_41C0_5704F8B574B9); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 174.29,
   "hfov": 26.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.99,
   "image": "this.AnimatedImageResource_0D3D70E3_1003_0675_4164_24A9681CCCF2",
   "pitch": -29.96,
   "yaw": -10.69,
   "distance": 100
  }
 ],
 "id": "overlay_1F23A8E5_100D_0672_41A6_7643A9219826",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.69,
   "hfov": 25.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.92,
   "image": "this.AnimatedImageResource_0D3DD0E4_1003_0673_418C_75ABB7A4BCCC",
   "pitch": -26.18,
   "yaw": 173.26,
   "distance": 100
  }
 ],
 "id": "overlay_1F66B007_100D_05BD_4190_16762D555111",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC, this.camera_26C42861_2A82_C3FA_41B4_4E40F91DEC16); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 173.26,
   "hfov": 26.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.35,
   "image": "this.AnimatedImageResource_0D3A90FD_1003_064D_4194_2F4F41E79D25",
   "pitch": -28.59,
   "yaw": 1.67,
   "distance": 100
  }
 ],
 "id": "overlay_06A44005_100F_05B2_4174_E523E54F82BB",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.67,
   "hfov": 26.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.25,
   "image": "this.AnimatedImageResource_0D3AC0FF_1003_064D_41A7_7871D188AAC7",
   "pitch": -32.71,
   "yaw": -91.68,
   "distance": 100
  }
 ],
 "id": "overlay_06E2D0DF_100F_064D_4150_A8C90CAE2A27",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18, this.camera_26D9B892_2A82_C35E_41B9_D74FBD9CB256); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.68,
   "hfov": 25.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.26,
   "image": "this.AnimatedImageResource_0D39D0F7_1003_065E_4175_0555B00BCC54",
   "pitch": -28.93,
   "yaw": -30.25,
   "distance": 100
  }
 ],
 "id": "overlay_064712D1_100D_0A52_41A7_C98E7A947117",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B81D18A_1003_06B7_4163_59566FC1C555, this.camera_27A3EA39_2A82_C74A_41AC_8EC0F0054FD0); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -30.25,
   "hfov": 26.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.35,
   "image": "this.AnimatedImageResource_0D3A00F7_1003_065D_4179_209842793E1B",
   "pitch": -28.59,
   "yaw": 172.23,
   "distance": 100
  }
 ],
 "id": "overlay_067850E1_100D_0672_41A6_E1B540A22A71",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8, this.camera_27910A14_2A82_C75A_41B5_AE667EC21DD7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 172.23,
   "hfov": 26.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.99,
   "image": "this.AnimatedImageResource_0D3BE102_1003_07B7_4180_BA4D47170583",
   "pitch": -29.96,
   "yaw": -35.05,
   "distance": 100
  }
 ],
 "id": "overlay_087DDCF8_1003_3E52_4194_4A8933857F36",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B45DE78_1003_1A53_4194_689B871D2F18, this.camera_27BEBA81_2A82_C73A_4190_0A4EFF2D644B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.05,
   "hfov": 25.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.96
  }
 ]
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.02,
   "image": "this.AnimatedImageResource_0D3E10E4_1003_0673_4128_AFC2F3747AB0",
   "pitch": -36.82,
   "yaw": -24.41,
   "distance": 100
  }
 ],
 "id": "overlay_1FE0F122_100F_07F6_41A0_5DDFB9F2C5C4",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -24.41,
   "hfov": 24.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.44,
   "image": "this.AnimatedImageResource_0D3E40E5_1003_067D_41A3_CAFC3BE8098E",
   "pitch": -32.02,
   "yaw": 167.77,
   "distance": 100
  }
 ],
 "id": "overlay_0000A089_100F_06B2_41AC_5A40F54BD1EB",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A, this.camera_266AE9B6_2A82_C546_41A4_128F35BB7910); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 167.77,
   "hfov": 25.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.94,
   "image": "this.AnimatedImageResource_0D3B3100_1003_07B3_41A5_FB690D859708",
   "pitch": -21.38,
   "yaw": 67.56,
   "distance": 100
  }
 ],
 "id": "overlay_0773D07B_100D_0656_4183_9D501B9D6E77",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B7F789F_1003_06CD_4183_EA29085905C8, this.camera_2627E934_2A82_C55B_41BA_A427DB60386C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 67.56,
   "hfov": 27.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.87,
   "image": "this.AnimatedImageResource_0D3B8101_1003_07B5_4198_11B66BB699E6",
   "pitch": -21.72,
   "yaw": 158.16,
   "distance": 100
  }
 ],
 "id": "overlay_078F68AD_100D_06CD_4192_06378F4995C5",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1B886255_1005_0A52_41AF_61A69D62C415, this.camera_26335949_2A82_C5CC_41B4_FA66C7F25D9E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 158.16,
   "hfov": 27.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.72
  }
 ]
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_0CB3DCEE_1003_7E4E_4163_C6C613C4E0C4"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "0%",
 "width": 300,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 40,
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingTop": 40,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "horizontal",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "0%",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 110,
 "verticalAlign": "middle",
 "gap": 10,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "verticalAlign": "top",
 "gap": 3,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "minWidth": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "levels": [
  {
   "url": "media/panorama_04057C15_0FFF_3DDD_41AB_6CD8186B260F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3C50DE_1003_064F_41AC_472F140DFB32",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3CA0E1_1003_0675_41AC_D4E9E8A07DFE",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04B91216_0FFF_05DE_4194_CE45CFE3BEBC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3D10E2_1003_0677_4173_989DCEC76A5E",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3920F1_1003_0655_41A7_B8AB94963300",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BB6C80_0FFD_1EB2_419D_0BEBCD741028_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3980F2_1003_0657_4198_191596C716F2",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D38B0F0_1003_0653_419D_5B22EF7B98C2",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_0485E91C_0FFD_07D3_41A3_6A6D7076BF16_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D38F0F0_1003_0653_41A1_DAEF26459532",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3FF0EE_1003_064F_4191_D5F0A428A5FA",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BB16D9_0FFD_0A52_417B_ECDDC2E70F31_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3850EF_1003_064D_41AD_06A49050A72D",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D39F0F3_1003_0655_41AA_35AB33EF464C",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04935D86_0FFC_FEBE_41AE_6EAFA25D55D7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D38D0F4_1003_0653_4181_ED0623CABCD6",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3EA0EB_1003_0675_416F_86E772090D62",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BAEE53_0FFC_FA56_4198_1067A2EB1BA0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3EE0EC_1003_0673_41AE_A6546D7DD960",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3900F5_1003_065D_41AC_1AE74B2CB11C",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B81D18A_1003_06B7_4163_59566FC1C555_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3960F6_1003_065F_4171_A74A3B5A6BEE",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3F50ED_1003_0672_41AC_A5591F604A9B",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_0473D33C_0FFD_0BD2_419B_20E3F4F6892A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3F80ED_1003_064D_41A5_6FA46D3536CF",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3D70E3_1003_0675_4164_24A9681CCCF2",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_04BD66CE_0FFF_0A4F_4171_9F0B93629B2A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3DD0E4_1003_0673_418C_75ABB7A4BCCC",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3A90FD_1003_064D_4194_2F4F41E79D25",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B7F789F_1003_06CD_4183_EA29085905C8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3AC0FF_1003_064D_41A7_7871D188AAC7",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D39D0F7_1003_065E_4175_0555B00BCC54",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B448525_1003_0FF2_419D_C8B2331EE3BB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3A00F7_1003_065D_4179_209842793E1B",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B886255_1005_0A52_41AF_61A69D62C415_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3BE102_1003_07B7_4180_BA4D47170583",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3E10E4_1003_0673_4128_AFC2F3747AB0",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_047F0A14_0FFF_05D2_4194_46F4ECD4FF44_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3E40E5_1003_067D_41A3_CAFC3BE8098E",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3B3100_1003_07B3_41A5_FB690D859708",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_1B45DE78_1003_1A53_4194_689B871D2F18_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_0D3B8101_1003_07B5_4198_11B66BB699E6",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "transparencyActive": true,
 "width": 50,
 "class": "IconButton",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_2B1C229D_25B6_B16A_4193_2D849E6BEEAD",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_0D3AEF12_1005_7BD6_419A_32228E4A6396",
  "this.Container_2AFAEECA_25B2_8EEE_41B3_DF20AD57C5F6"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "bottom": "6.13%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "gap": 0,
 "data": {
  "name": "-Container buttons"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0.39%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "9.208%",
 "verticalAlign": "bottom",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "maxHeight": 605,
 "maxWidth": 1075,
 "id": "Image_0CB3DCEE_1003_7E4E_4163_C6C613C4E0C4",
 "class": "Image",
 "right": "0%",
 "width": "97.727%",
 "url": "skin/Image_0CB3DCEE_1003_7E4E_4163_C6C613C4E0C4.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "21.648%",
 "verticalAlign": "middle",
 "data": {
  "name": "Image21136"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "paddingLeft": 50,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 140,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMaxHeight": 1000,
 "minHeight": 1,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "height": "92%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "minWidth": 1,
 "itemOpacity": 1,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "paddingBottom": 70,
 "itemBackgroundOpacity": 0,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 0,
 "width": "100%",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemWidth": 220,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "horizontalAlign": "center",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderSize": 0,
 "rollOverItemThumbnailShadow": true,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "gap": 26,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "data": {
  "name": "ThumbnailList"
 },
 "paddingTop": 10,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingBottom": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "top": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 140,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "55%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "gap": 10,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "45%",
 "paddingBottom": 20,
 "paddingLeft": 60,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 0,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "transparencyActive": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "shadowSpread": 1,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Instagram",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('https://www.instagram.com/bonequinhadeluxoclubb/', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowSpread": 1,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "73.333%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Facebook",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 23,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('https://www.facebook.com/bonequinhadeluxoclub?mibextid=ZbWKwL', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Location",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "shadowSpread": 1,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547996770464', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowSpread": 1,
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547997246298', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547992586113', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_2B1C229D_25B6_B16A_4193_2D849E6BEEAD",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547996149709', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Button_35943488_25B2_916B_41B9_7239140ABFE7"
 ],
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "shadowSpread": 1,
 "id": "Button_0D3AEF12_1005_7BD6_419A_32228E4A6396",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "39px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Localiza\u00e7\u00e3o",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('https://goo.gl/maps/EtDiFnZtwvo3fZGJ8', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Button_2A8C6E64_25B2_91DA_41AB_4D6A256EB2DF"
 ],
 "id": "Container_2AFAEECA_25B2_8EEE_41B3_DF20AD57C5F6",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "transparencyActive": true,
 "class": "IconButton",
 "width": 42,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "class": "Image",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "height": 50,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 300,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 30,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "transparencyActive": false,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minHeight": 50,
 "horizontalAlign": "right",
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "transparencyActive": false,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minHeight": 50,
 "horizontalAlign": "right",
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "paddingBottom": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "top": "0%",
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "transparencyActive": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "class": "IconButton",
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "transparencyActive": false,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minHeight": 50,
 "horizontalAlign": "right",
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "10%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "class": "Image",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "bottom",
 "data": {
  "name": "Image40635"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "5%",
 "verticalAlign": "top",
 "gap": 0,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": 40,
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_35943488_25B2_916B_41B9_7239140ABFE7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "width": "100%",
 "iconHeight": 32,
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "-4900%",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "29px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547992586113', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_2A8C6E64_25B2_91DA_41AB_4D6A256EB2DF",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "width": "100%",
 "iconHeight": 32,
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "-4900%",
 "shadowBlurRadius": 6,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "29px",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Whatsapp",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "click": "this.openLink('http://wa.me/5547992586113', '_blank')",
 "pressedBackgroundOpacity": 1
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 20,
 "paddingLeft": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.72vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "shadowSpread": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "width": 180,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderRadius": 50,
 "height": 50,
 "label": "LOREM IPSUM",
 "verticalAlign": "middle",
 "gap": 5,
 "fontStyle": "italic",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "fontWeight": "bold",
 "cursor": "hand"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "height": "46%",
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "height": "75%",
 "verticalAlign": "top",
 "gap": 10,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scaleMode": "fit_inside",
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "class": "Image",
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "75%",
 "paddingBottom": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "shadow": false,
 "scrollBarWidth": 10
}],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "start": "this.playAudioList([this.audio_2E69C15A_2055_B088_415F_E8FE20B4C35E]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; }
 },
 "minWidth": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "gap": 10,
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
