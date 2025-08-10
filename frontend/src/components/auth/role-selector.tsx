'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UserRoleSelectorProps {
  role: 'patient' | 'doctor'
  onRoleChange: (role: 'patient' | 'doctor') => void
}

export function UserRoleSelector({ role, onRoleChange }: UserRoleSelectorProps) {
  return (
    <div className="flex gap-2 mb-4">
      <Button
        type="button"
        variant={role === 'patient' ? 'default' : 'outline'}
        className={cn(
          "flex-1",
          role === 'patient' ? 'bg-teal-600 hover:bg-teal-700' : ''
        )}
        onClick={() => onRoleChange('patient')}
      >
        Patient
      </Button>
      <Button
        type="button"
        variant={role === 'doctor' ? 'default' : 'outline'}
        className={cn(
          "flex-1",
          role === 'doctor' ? 'bg-blue-600 hover:bg-blue-700' : ''
        )}
        onClick={() => onRoleChange('doctor')}
      >
        Doctor
      </Button>
    </div>
  )
}