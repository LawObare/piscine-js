function getAcceleration(obj) {
    if ('f' in obj && 'm' in obj) {
        return obj.f / obj.m;
    } else if ('Δv' in obj && 'Δt' in obj) {
        return obj.Δv / obj.Δt;
    } else if ('d' in obj && 't' in obj) {
        return (2 * obj.d) / (obj.t ** 2);
    } else {
        return "impossible";
    }
}
