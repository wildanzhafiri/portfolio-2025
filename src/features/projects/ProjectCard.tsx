import type { Project } from './projects.types';
import { Button } from '../../components/ui/Button';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article
      className="
        group relative h-full rounded-3xl overflow-hidden
        border border-slate-200/60 dark:border-white/10
        bg-white/80 dark:bg-white/5 backdrop-blur
        transition
        hover:-translate-y-0.5 hover:shadow-[0_30px_100px_rgba(249,115,22,0.18)]
        flex flex-col
      "
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open project ${project.title}`}
        className="
          absolute inset-0 z-10
          text-left
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 cursor-pointer
        "
      />

      <div className="relative h-40">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />
        ) : null}

        {!project.image ? (
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_22%_28%,rgba(249,115,22,0.35),transparent_55%),
                  radial-gradient(circle_at_78%_62%,rgba(20,184,166,0.26),transparent_58%),
                  radial-gradient(circle_at_65%_15%,rgba(56,189,248,0.20),transparent_60%)]
            "
          />
        ) : null}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/60 via-black/20 to-black/10
            dark:from-black/70 dark:via-black/25 dark:to-black/10
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.08] dark:opacity-[0.12]
            [background-image:linear-gradient(to_right,rgba(15,23,42,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.6)_1px,transparent_1px)]
            dark:[background-image:linear-gradient(to_right,rgba(241,245,249,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(241,245,249,0.55)_1px,transparent_1px)]
            [background-size:28px_28px]
          "
        />

        <div
          className="
            absolute left-5 top-5 h-12 w-1.5 rounded-full
            bg-gradient-to-b from-orange-500 to-amber-400
            shadow-[0_10px_30px_rgba(249,115,22,0.25)]
          "
        />

        <div className="absolute left-5 right-5 bottom-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
                text-xl font-semibold leading-snug tracking-tight
                text-white
               transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:via-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent

                line-clamp-2
              "
              title={project.title}
            >
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-white/80">Click to view details</p>
          </div>

          <span
            className="
              shrink-0 rounded-full px-3 py-1 text-[11px] font-medium
              bg-white/80 text-slate-900
              border border-white/30
              backdrop-blur
            "
          >
            {project.role}
          </span>
        </div>
      </div>

      <div className="px-6 pt-5 pb-4 flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="
                rounded-full px-3 py-1 text-[11px] font-semibold
                bg-white text-slate-800
                border border-orange-200/80
                shadow-sm
                transition
                hover:-translate-y-[1px]
                hover:border-orange-300
                hover:bg-orange-50
                hover:text-orange-700
                hover:shadow-[0_10px_25px_rgba(249,115,22,0.14)]
                dark:bg-white/5 dark:text-slate-100
                dark:border-orange-400/20
                dark:hover:bg-orange-400/10
                dark:hover:text-orange-300
              "
            >
              {t}
            </span>
          ))}

          {project.tags.length > 5 ? (
            <span
              className="
                rounded-full px-3 py-1 text-[11px] font-semibold
                bg-white text-slate-700
                border border-orange-200/60
                shadow-sm
                dark:bg-white/5 dark:text-slate-200
                dark:border-orange-400/15
              "
            >
              +{project.tags.length - 5}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-auto px-6 pb-6 relative z-20">
        <div
          className="
            flex items-center gap-3
            rounded-2xl
            border border-slate-200/60 dark:border-white/10
            bg-white/55 dark:bg-white/5 backdrop-blur
            px-3 py-3
          "
        >
          <span className="text-xs text-slate-600 dark:text-slate-300">Quick links</span>

          <div className="ml-auto flex gap-2">
            {project.links.live ? (
              <Button as="a" href={project.links.live} target="_blank" rel="noreferrer" size="sm">
                Live
              </Button>
            ) : null}

            {project.links.github ? (
              <Button as="a" href={project.links.github} target="_blank" rel="noreferrer" variant="ghost" size="sm">
                GitHub
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
