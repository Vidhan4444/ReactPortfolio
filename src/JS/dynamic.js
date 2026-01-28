 const serviceBoxes = document.querySelectorAll(".service-box");
      const observer = new IntersectionObserver(
        (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classNameList.add("show");
            observer.unobserve(entry.target);
          }
        });
        },
      {threshold: 0.2 }
      );

      serviceBoxes.forEach((box) => observer.observe(box));

      const btn = document.getElementById("showAchievements");
      const achievements = document.getElementById("achievements");
      btn.addEventListener("click", () => {
        if (
      achievements.style.display === "none" ||
      achievements.style.display === ""
      ) {
        achievements.style.display = "block";
      btn.textContent = "Hide Achievements and Partcipations";
        } else {
        achievements.style.display = "none";
      btn.textContent = "Achievements and Partcipations";
        }
      });