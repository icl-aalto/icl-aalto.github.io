/*
  website-agent: 按访客当天日期把 seminar 报告分到 Upcoming / Past
  (站点只在推送和每周定时时重建, 构建时的划分可能过时)
*/

{
  const onLoad = () => {
    const upcoming = document.querySelector("#talks-upcoming");
    const past = document.querySelector("#talks-past");
    if (!upcoming || !past) return;

    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

    const talks = [...document.querySelectorAll(".talk[data-date]")];
    const future = talks.filter((t) => t.dataset.date >= today).sort((a, b) => a.dataset.date.localeCompare(b.dataset.date));
    const done = talks.filter((t) => t.dataset.date < today).sort((a, b) => b.dataset.date.localeCompare(a.dataset.date));
    future.forEach((t) => upcoming.append(t));
    done.forEach((t) => past.append(t));

    document.querySelector("#talks-upcoming-empty").hidden = future.length > 0;
    document.querySelector("#talks-past-empty").hidden = done.length > 0;
    // 最近的一场高亮
    future.find((t) => !t.hasAttribute("data-cancelled"))?.classList.add("talk-next");
  };

  window.addEventListener("load", onLoad);
}
