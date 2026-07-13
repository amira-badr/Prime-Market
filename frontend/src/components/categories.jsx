import {
  Laptop,
  Shirt,
  WashingMachine,
  Sparkles,
  Bath,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: Laptop,
    color: "from-cyan-500 to-blue-600",
  },

  {
    title: "Clothes",
    icon: Shirt,
    color: "from-pink-500 to-fuchsia-600",
  },

  {
    title: "Appliances",
    icon: WashingMachine,
    color: "from-violet-500 to-indigo-600",
  },

  {
    title: "Sanitary",
    icon: Bath,
    color: "from-emerald-500 to-cyan-600",
  },

  {
    title: "Beauty",
    icon: Sparkles,
    color: "from-orange-400 to-pink-500",
  },
];

export default function Categories() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-extrabold mb-14">

          Shop By

          <span className="bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            {" "}Categories
          </span>

        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">

          {categories.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/30 p-8 text-center shadow-xl hover:-translate-y-2 duration-300 cursor-pointer"
              >

                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white shadow-xl group-hover:scale-110 duration-300`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="text-xl font-bold text-gray-700">
                  {item.title}
                </h3>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};