import InsughtImageOne from "@/assets/imgs/insights/insights-1.svg";

const FirstArticle = () => {
  return (
    <>
      <h3>NEW STUDY APRIL 2024</h3>
      <h1>Impact of Climate Change and Extreme Weather on Crop Yield</h1>
      <img src={InsughtImageOne} />
      <p>
        A new study by Danish researchers delves into the impact of climate
        change and extreme weather events on crop yields. Climate change,
        characterized by increasing global temperatures, altered precipitation
        patterns, and greater frequency of extreme weather events, presents
        significant challenges to agriculture worldwide. The implications for
        crop yield are particularly profound, affecting food security and
        agricultural economics.
      </p>
      <p>
        The paper explores the current challenges faced by Danish agriculture
        due to climate change, emphasizing the increasing frequency and severity
        of extreme weather phenomena. These events include heatwaves, droughts,
        heavy rainfall, and storms, each contributing to the reduction of crop
        productivity and altering agricultural practices.
      </p>
      <p>
        Extreme weather events are becoming more frequent and intense due to
        climate change, posing significant risks to agriculture. In Denmark,
        these events have disrupted traditional farming cycles, directly
        damaging crops and imposing stress conditions that reduce yield
        potential.
      </p>
      <p>
        The impacts of extreme weather events can be divided into four
        categories:
      </p>
      <ul>
        <li>
          <b>Heatwaves.</b> Heatwaves have led to increased thermal stress on
          crops, accelerating development phases detrimentally and reducing the
          overall growing period necessary for optimal yield. For instance, high
          temperatures during the flowering period of winter wheat have been
          shown to substantially decrease grain production.
        </li>
        <li>
          <b>Drought.</b> The 2018 agricultural year highlighted the severe
          impacts of drought in Denmark, with a marked decrease in the yields of
          key crops like spring barley and winter wheat. Drought conditions
          limit water availability, crucial for crop survival and productivity,
          leading to stunted growth and reduced yields.
        </li>
        <li>
          <b>Heavy Rainfall and Flooding.</b> Conversely, episodes of heavy
          rainfall lead to waterlogging and flooding, which can suffocate crops
          by drastically reducing soil oxygen levels and causing root diseases.
          Additionally, excessive rains can lead to nutrient leaching, further
          impoverishing soil fertility and diminishing crop yields.
        </li>
        <li>
          <b>Storms.</b> Storms can cause physical damage to crops through
          strong winds and heavy precipitation, leading to immediate and severe
          yield losses. The mechanical stress and breakage of plant structures
          impair their ability to grow and reproduce effectively.
        </li>
      </ul>
      <p>
        The frequency and intensity of extreme weather events, such as storms
        and heatwaves, have increased due to climate change. These events can
        cause immediate and devastating impacts on agriculture by damaging crops
        directly and exacerbating stress conditions like waterlogging and
        erosion. The increased variability in weather also makes farming more
        unpredictable and risk-prone, complicating planting and harvesting
        schedules and pest and disease management.
      </p>
      <p>
        Despite these challenges, the financial sector is lacking tools to
        estimate risk levels on their books. AgroRisk is designed to help close
        this gap and provide the necessary data to enable data-driven
        decision-making.
      </p>
      <p>
        <a href="https://pure.au.dk/ws/portalfiles/portal/337689312/Vidensyntese_om_klimatilpasning_og_landbrug_23.08.2023.pdf">
          Link
        </a>{" "}
        to study.
      </p>
    </>
  );
};

export default FirstArticle;
