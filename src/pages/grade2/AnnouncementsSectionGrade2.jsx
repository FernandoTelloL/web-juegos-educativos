import { FaBookOpen, FaPaintBrush, FaRocket } from "react-icons/fa"


export const AnnouncementsSectionGrade2 = () => {
  return (
    <section className="mb-14">

      {/* SVG de Olas en la parte superior */}
      <div className="w-full">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 34.295684971578616,134.74527598664957 68.59136994315723,119.49055197329916 93,117 C 117.40863005684277,114.50944802670084 131.93020519894972,124.7830680934529 155,140 C 178.06979480105028,155.2169319065471 209.6878092610438,175.3771756528892 242,166 C 274.3121907389562,156.6228243471108 307.318557756875,117.7082292949902 341,95 C 374.681442243125,72.2917707050098 409.03795971145604,65.78990716714995 438,75 C 466.96204028854396,84.21009283285005 490.529603397301,109.13214203640996 517,135 C 543.470396602699,160.86785796359004 572.8436266993398,187.6815246872102 601,184 C 629.1563733006602,180.3184753127898 656.0958898053402,146.14175921474921 682,147 C 707.9041101946598,147.85824078525079 732.7728140792999,183.75143845379293 761,166 C 789.2271859207001,148.24856154620707 820.8128538774603,76.85248697007896 853,78 C 885.1871461225397,79.14751302992104 917.975770410859,152.83861366589116 947,191 C 976.024229589141,229.16138633410884 1001.2840644791038,231.79305836635632 1030,199 C 1058.7159355208962,166.20694163364368 1090.8879716727263,97.98915286868355 1114,89 C 1137.1120283272737,80.01084713131645 1151.1640488299909,130.25033015890955 1173,168 C 1194.8359511700091,205.74966984109045 1224.4558330073105,231.0095264956782 1258,221 C 1291.5441669926895,210.9904735043218 1329.0126191407683,165.71156385837764 1360,148 C 1390.9873808592317,130.28843614162236 1415.493690429616,140.14421807081118 1440,150 L 1440,400 Z" stroke="none" strokeWidth="0" fill="#ff6f61" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
      </div>

      <h1 className="text-5xl font-bold text-center mb-12">2° GRADO</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center container px-2 md:w-[80%] mx-auto mt-0 mb-24">

        {/* Primer ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-red-500 text-white p-4 rounded-full">
            <FaRocket size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Despegamos al Conocimiento</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            ¡Súbete a nuestro cohete del saber! Juntos, vamos a explorar y descubrir cosas nuevas cada día.
          </p>
        </div>

        {/* Segundo ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-blue-500 text-white p-4 rounded-full">
            <FaBookOpen size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Historias que Inspiran</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            Cada libro es una aventura. ¡Ven y disfruta de historias que te harán soñar y aprender!
          </p>
        </div>

        {/* Tercer ítem */}
        <div className="flex flex-col items-center mt-8">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <FaPaintBrush size={40} />
          </div>
          <h2 className="text-xl font-bold mt-4">Arte para Crecer</h2>
          <p className="mt-2 text-lg md:text-normal w-[70%] text-gray-600">
            Colorea el mundo con tus ideas. El arte es nuestro aliado para aprender y expresarnos.
          </p>
        </div>

      </div>

    </section>
  )
}
