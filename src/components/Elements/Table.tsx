import { ArchiveIcon } from 'lucide-react'
import React from 'react'

export type TableColumnType<Entry> = {
  title: string
  field: keyof Entry
  Cell?: ({ entry }: { entry: Entry }) => React.ReactNode
}

export type TableProps<Entry> = {
  data: Entry[]
  columns: TableColumnType<Entry>[]
}

export const Table = <Entry extends object>({
  data,
  columns
}: TableProps<Entry>) => {
  if (!data?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center bg-background text-muted">
        <ArchiveIcon className="size-16" />
        <h4>No Entries Found</h4>
      </div>
    )
  }

  return (
    <div className="max-h-[65vh] w-full overflow-auto">
      <table className="min-w-full divide-y divide-border text-sm">
        <thead className="sticky top-0 z-10 bg-background text-foreground">
          <tr>
            {columns.map((col) => (
              <th
                key={col.title}
                className="text-nowrap p-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((entry, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td
                  key={`${String(col.field)}-${index}`}
                  className="px-3 py-4 text-sm font-medium"
                >
                  <span>
                    {col.Cell ? col.Cell({ entry }) : String(entry[col.field])}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
