type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  St extends Pick<AllType, "name" | "color">,
  Uuh extends Pick<AllType, "position" | "weight">
>(top: St, bottom: Uuh): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
